const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser')
const app = express();

// used to encrypt/decrypt the timestamp for proof of work
const SECRET_KEY = Buffer.from(
  '83f31145f5043a0bc314761ff822b4ae46ef91c06b5adde57c73189b2f096c4f',
  'hex'
);

// there should be enough time to compute an answer and send it to the server
const CHALLENGE_EXPIRATION = 1000 * 60 * 10;

// sets the number of leading 0 bits required for an answer
const CHALLENGE_DIFFICULTY = 24;

// the client code assumes the challenge will be no longer than 64 bytes after
// decoding the base64
function generatePowChallenge() {
  const plaintext = JSON.stringify({timestamp: (new Date()).getTime()});
  const nonce = Buffer.alloc(12);
  crypto.randomFillSync(nonce);
  const cipher = crypto.createCipheriv(
    'chacha20-poly1305',
    SECRET_KEY,
    nonce,
    { authTagLength: 16 },
  );

  let encoded = nonce.toString('base64');
  encoded += cipher.update(plaintext, 'utf8', 'base64');
  encoded += cipher.final('base64');
  encoded += cipher.getAuthTag().toString('base64');

  return encoded;
}

// TODO: this function also needs to verify that a challenge/answer pair is not
// being reused. If you have only 1 node process you can store the pairs from
// the last CHALLENGE_EXPIRATION minutes in memory, otherwise you will have to
// store them somewhere else. You might want to store just the challenge, if so
// it can't be reused. Note there's no problem reusing a challenge because
// knowing an answer won't help find another one.
function verifyPowChallenge(challenge, answer) {
  const blob = Buffer.concat([challenge, answer]);
  if (blob.length < 64 || blob.length > 256) {
    return false;
  }

  const hash = crypto.createHash('sha512').update(blob).digest();
  for (let i = 0; i < CHALLENGE_DIFFICULTY; i++) {
    if ((hash[i >>> 3] >>> (7 - (i & 7))) & 1) {
      return false;
    }
  }

  const decipher = crypto.createDecipheriv(
    'chacha20-poly1305',
    SECRET_KEY,
    challenge.slice(0, 12),
    { authTagLength: 16 },
  );

  try {
    decipher.setAuthTag(challenge.slice(challenge.length - 16));

    let plaintext = Buffer.concat([
      decipher.update(challenge.slice(12, challenge.length - 16)),
      decipher.final(),
    ]);

    const data = JSON.parse(plaintext.toString());
    const now = (new Date()).getTime();
    if (data.timestamp + CHALLENGE_EXPIRATION < now) {
      return false;
    }
  } catch (_) {
    return false;
  }

  return true;
}

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/pow', (_, res) => {
  res.json({
    challenge: generatePowChallenge(),
    difficulty: CHALLENGE_DIFFICULTY,
    expiration: CHALLENGE_EXPIRATION,
  });
});

app.post('/message', (req, res) => {
  if (
    !verifyPowChallenge(
      req.body && Buffer.from(req.body.challenge, 'base64'),
      req.body && Buffer.from(req.body.answer, 'base64')
    )
  ) {
    res.status(403).end();
    return;
  }

  // answer is ok, process msg here
  res.end();
});

app.listen(3000);