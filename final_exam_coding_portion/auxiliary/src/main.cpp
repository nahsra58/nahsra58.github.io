// Copyright (c) 2025 Ethan Sifferman.
// All rights reserved. Distribution Prohibited.

#include <iostream>

#include "random_image.h"

int main(int argc, char* argv[]) {
  if (argc != 4) {
    std::cerr << "Usage: " << argv[0] << " <filename> <width> <height>"
              << std::endl;
    return 1;
  }

  const char* filename = argv[1];
  int width = std::atoi(argv[2]);
  int height = std::atoi(argv[3]);

  createRandomImage(filename, width, height);

  return 0;
}
