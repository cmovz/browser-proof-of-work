// base 64 encoded pow.wasm file -----------------------------------------------
const b64Wasm = 
  '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'
  + '+DIANCGIhCgID8B4OEIANCKIhCgP4DgyADQjiIhISENwMIIAIgASkDECIDQjiGIANCKIZCgICA'
  + 'gICAwP8Ag4QgA0IYhkKAgICAgOA/gyADQgiGQoCAgIDwH4OEhCADQgiIQoCAgPgPgyADQhiIQo'
  + 'CA/AeDhCADQiiIQoD+A4MgA0I4iISEhDcDECACIAEpAxgiA0I4hiADQiiGQoCAgICAgMD/AIOE'
  + 'IANCGIZCgICAgIDgP4MgA0IIhkKAgICA8B+DhIQgA0IIiEKAgID4D4MgA0IYiEKAgPwHg4QgA0'
  + 'IoiEKA/gODIANCOIiEhIQ3AxggAiABKQMgIgNCOIYgA0IohkKAgICAgIDA/wCDhCADQhiGQoCA'
  + 'gICA4D+DIANCCIZCgICAgPAfg4SEIANCCIhCgICA+A+DIANCGIhCgID8B4OEIANCKIhCgP4Dgy'
  + 'ADQjiIhISENwMgIAIgASkDKCIDQjiGIANCKIZCgICAgICAwP8Ag4QgA0IYhkKAgICAgOA/gyAD'
  + 'QgiGQoCAgIDwH4OEhCADQgiIQoCAgPgPgyADQhiIQoCA/AeDhCADQiiIQoD+A4MgA0I4iISEhD'
  + 'cDKCACIAEpAzAiA0I4hiADQiiGQoCAgICAgMD/AIOEIANCGIZCgICAgIDgP4MgA0IIhkKAgICA'
  + '8B+DhIQgA0IIiEKAgID4D4MgA0IYiEKAgPwHg4QgA0IoiEKA/gODIANCOIiEhIQ3AzAgAiABKQ'
  + 'M4IgNCOIYgA0IohkKAgICAgIDA/wCDhCADQhiGQoCAgICA4D+DIANCCIZCgICAgPAfg4SEIANC'
  + 'CIhCgICA+A+DIANCGIhCgID8B4OEIANCKIhCgP4DgyADQjiIhISENwM4IAIgASkDQCIDQjiGIA'
  + 'NCKIZCgICAgICAwP8Ag4QgA0IYhkKAgICAgOA/gyADQgiGQoCAgIDwH4OEhCADQgiIQoCAgPgP'
  + 'gyADQhiIQoCA/AeDhCADQiiIQoD+A4MgA0I4iISEhDcDQCACIAEpA0giA0I4hiADQiiGQoCAgI'
  + 'CAgMD/AIOEIANCGIZCgICAgIDgP4MgA0IIhkKAgICA8B+DhIQgA0IIiEKAgID4D4MgA0IYiEKA'
  + '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'
  + 'ycKX9Z7PrWOqtvy18XWEdKjBlEbA==';

// base 64 decoding code below -------------------------------------------------
const base64Table = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,0,0,0,0,0,1,2,3,4,5,6,
  7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

function base64Decode(str) {
  const blocks = Math.ceil(str.length / 4);
  const binLength = blocks * 3;
  const bin = new Uint8Array(binLength);
  const binStr = new TextEncoder().encode(str);

  let i, dest = 0;
  for (i = 0; i < binStr.length - 4; i += 4, dest += 3) {
    bin[dest] = base64Table[binStr[i]] << 2;
    bin[dest] |= base64Table[binStr[i + 1]] >> 4;

    bin[dest + 1] = base64Table[binStr[i + 1]] << 4;
    bin[dest + 1] |= base64Table[binStr[i + 2]] >> 2;

    bin[dest + 2] = base64Table[binStr[i + 2]] << 6;
    bin[dest + 2] |= base64Table[binStr[i + 3]];
  }

  let trimN = 0;
  bin[dest] = base64Table[binStr[i]] << 2;
  bin[dest] |= base64Table[binStr[i + 1]] >> 4;

  if (str[i + 2] === '=') {
    trimN = 2;
    bin[dest + 1] = base64Table[binStr[i + 1]] << 4;
  } else {
    if (str[i + 3] !== '=') {
      bin[dest + 1] = base64Table[binStr[i + 1]] << 4;
      bin[dest + 1] |= base64Table[binStr[i + 2]] >> 2;
      bin[dest + 2] = base64Table[binStr[i + 2]] << 6;
      bin[dest + 2] |= base64Table[binStr[i + 3]];
    } else {
      trimN = 1;
      bin[dest + 1] = base64Table[binStr[i + 1]] << 4;
      bin[dest + 1] |= base64Table[binStr[i + 2]] >> 2;
    }
  }

  return bin.subarray(0, bin.length - trimN);
}

// main code -------------------------------------------------------------------

// save msg if it comes before the WebAssembly is instantiated
let works = [];
onmessage = (e) => {
  works.push({ challenge: e.data[0], difficulty: e.data[1] });
};

WebAssembly.instantiate(base64Decode(b64Wasm)).then(obj => {
  const { exports } = obj.instance;
  const HEAPU8 = new Uint8Array(exports.memory.buffer);
  const basePtr = exports.__heap_base;
  const compute_pow = exports.compute_pow;

  function computePow() {
    const work = works.pop();

    // copy challenge so the wasm code can use it
    let ptr = basePtr;
    for (let i = 0; i < 64; i++) {
      HEAPU8[ptr + i] = 0;
    }
    HEAPU8.set(work.challenge, ptr);
    ptr += 64;

    // set up initial state
    const nonce = new Uint8Array(32);
    crypto.getRandomValues(nonce);
    HEAPU8.set(nonce, ptr);
    ptr += 32;

    // compute answer
    const t0 = performance.now();
    while (!compute_pow(basePtr, work.difficulty, 4294967295)) {
    }
    console.log(performance.now() - t0);

    // return the answer
    postMessage(HEAPU8.subarray(ptr - 32 - (64 - work.challenge.length), ptr));

    // stop listening for msgs
    onmessage = () => {};
  }

  if (works.length > 0) {
    // if there's a msg, process it
    computePow();
  } else {
    // update code to also process the received msg
    onmessage = (e) => {
      works.push({ challenge: e.data[0], difficulty: e.data[1] });
      computePow();
    };
  }
});