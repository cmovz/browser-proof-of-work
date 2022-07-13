# browser-proof-of-work
Use proof of work to protect forms. Contains example server and client code, both JavaScript and WebAssembly for best performance.

## Running the code
Run the following commands:
```
git clone https://github.com/cmovz/browser-proof-of-work.git
cd browser-proof-of-work/server
npm i express
node example_app.js
```
Then go to http://localhost:3000/example.html and open the developer console on your browser to see how long it took to compute the answer and other related information.

## Compiling the WebAssembly code
Go to the `client/wasm_src` directory and run `bash build.sh`. You will need `clang-13` on Ubuntu or just `clang` on Arch Linux. The script will generate a file called `pow.wasm`, which contains the code that computes an answer for a given challenge.
