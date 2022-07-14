const fs = require('fs');

const bytes = fs.readFileSync('public/pow.wasm');

const str = bytes.toString('base64');
let pos = 1;
let content = '\'';
for (const c of str) {
  if (pos + 3 >= 80) {
    content += '\'\n  + \'';
    pos = 3;
  }
  content += c;
  pos += 1;
}

console.log(`
const b64Wasm = 
  ${content}';
`);