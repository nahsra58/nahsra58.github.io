// Copyright (c) 2025 Ethan Sifferman.
// All rights reserved. Distribution Prohibited.

#include "primesInRange.h"
#include "vectorFileHelpers.h"

int main() {
  const int num_cores = std::thread::hardware_concurrency();

  auto x0 = primesInRange(100, 1000, 1);
  writeVectorToFile(x0, "received/100-1000.txt");
  verifyVectorMatchesFile(x0, "expected/100-1000.txt");

  auto x1 = primesInRange(100, 1000, 10);
  writeVectorToFile(x1, "received/100-1000.txt");
  verifyVectorMatchesFile(x1, "expected/100-1000.txt");

  auto x2 = primesInRange(100, 1000, 9);
  writeVectorToFile(x2, "received/100-1000.txt");
  verifyVectorMatchesFile(x2, "expected/100-1000.txt");

  auto x3 =
      primesInRange(10000000000000000ULL, 10000000000010000ULL, num_cores);
  writeVectorToFile(x3,
                    "received/10000000000000000ULL-10000000000010000ULL.txt");
  verifyVectorMatchesFile(
      x3, "expected/10000000000000000ULL-10000000000010000ULL.txt");
  return 0;
}
