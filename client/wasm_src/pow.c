#include "sha512.h"
#include "memory.h"
#include <stdint.h>

struct pow {
  uint64_t challenge[8];
  uint64_t answer[4];
  uint64_t _pad[4];
};

// returns 1 if found an answer and 0 otherwise
int compute_pow(struct pow *p, unsigned int zero_count, unsigned int max_iter)
{
  for (unsigned int i = 0; i < max_iter; ++i) {
    uint64_t answer[8];
    sha512(p, 96, answer);

    unsigned int j;
    for (j = 0; j < zero_count; ++j) {
      unsigned char *ptr = (unsigned char*)answer;
      if ((ptr[j / 8] >> (7 - (j % 8))) & 1)
        break;
    }

    if (j == zero_count) {
      // found an answer
      return 1;
    }

    memcpy(p->answer, answer, 32);
  }

  return 0;
}