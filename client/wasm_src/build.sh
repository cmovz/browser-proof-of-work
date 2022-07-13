clang-13 --target=wasm32 *.c -c -O3 -mbulk-memory -flto -fvisibility=default
wasm-ld-13 *.o -o pow.wasm --no-entry --export=compute_pow --export=__heap_base --strip-all
rm *o