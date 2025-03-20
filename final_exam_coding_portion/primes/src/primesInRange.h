// Copyright (c) 2025 Ethan Sifferman.
// All rights reserved. Distribution Prohibited.

#include <cstdint>
#include <cstring>
#include <mutex>
#include <thread>
#include <vector>

const size_t precomputedSmallPrimesLUTSize = 100;
const size_t MaxLUTSize = 1000000;
const bool precomputedSmallPrimesLUT[precomputedSmallPrimesLUTSize] = {
    false, false, true,  true,  false, true,  false, true,  false, false,
    false, true,  false, true,  false, false, false, true,  false, true,
    false, false, false, true,  false, false, false, false, false, true,
    false, true,  false, false, false, false, false, true,  false, false,
    false, true,  false, true,  false, false, false, true,  false, false,
    false, false, false, true,  false, false, false, false, false, true,
    false, true,  false, false, false, false, false, true,  false, false,
    false, true,  false, true,  false, false, false, false, false, true,
    false, false, false, true,  false, false, false, false, false, true,
    false, false, false, false, false, false, false, true,  false, false};

bool isPrime(uint64_t n) {
  bool *localLUT = new bool[MaxLUTSize]{};
  memcpy(localLUT, precomputedSmallPrimesLUT, precomputedSmallPrimesLUTSize);
  if (n < precomputedSmallPrimesLUTSize) return localLUT[n];

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (uint64_t i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
}

void primesInRangeThread(const uint64_t start, const uint64_t end,
                         std::vector<uint64_t> *primes,
                         std::mutex *primes_mutex) {
  std::vector<uint64_t> local_primes;

  for (uint64_t num = start; num <= end; num++) {
    if (isPrime(num)) {
      local_primes.push_back(num);
    }
  }

  primes_mutex->lock();
  primes->insert(primes->end(), local_primes.begin(), local_primes.end());
  primes_mutex->unlock();
}

std::vector<uint64_t> primesInRange(uint64_t start, uint64_t end,
                                    int num_jobs) {
  if (start > end) return {};

  std::vector<uint64_t> primes;
  std::mutex primes_mutex;

  std::vector<std::thread> threads;
  const uint64_t range_size = (end - start + 1) / num_jobs;

  for (int i = 0; i < num_jobs; i++) {
    const uint64_t thread_start = start + i * range_size;
    const uint64_t thread_end = thread_start + range_size - 1;

    threads.emplace_back(primesInRangeThread, thread_start, thread_end, &primes,
                         &primes_mutex);
  }

  for (auto &thread : threads) {
    thread.join();
  }

  return primes;
}
