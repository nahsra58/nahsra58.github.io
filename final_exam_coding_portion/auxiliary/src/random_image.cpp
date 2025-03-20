// Copyright (c) 2025 Ethan Sifferman.
// All rights reserved. Distribution Prohibited.

#include <png.h>

#include <cstdlib>
#include <ctime>
#include <iostream>

void createRandomImage(const char* filename, int width, int height) {
  png_bytep* row_pointers = new png_bytep[height];
  for (int y = 0; y < height; ++y) {
    row_pointers[y] = new png_byte[width * 3];  // 3 bytes per pixel (RGB)
  }

  // Fill the image with random pixels
  std::srand(std::time(0));
  for (int y = 0; y < height; ++y) {
    for (int x = 0; x < width; ++x) {
      row_pointers[y][x * 3 + 0] = std::rand() % 256;  // Red
      row_pointers[y][x * 3 + 1] = std::rand() % 256;  // Green
      row_pointers[y][x * 3 + 2] = std::rand() % 256;  // Blue
    }
  }

  // Create a file to write to
  FILE* fp = fopen(filename, "wb");
  if (!fp) {
    std::cerr << "Could not open file " << filename << " for writing"
              << std::endl;
    return;
  }

  png_structp png =
      png_create_write_struct(PNG_LIBPNG_VER_STRING, nullptr, nullptr, nullptr);
  png_infop info = png_create_info_struct(png);
  png_init_io(png, fp);

  // Write header (8 bit colour depth)
  png_set_IHDR(png, info, width, height, 8, PNG_COLOR_TYPE_RGB,
               PNG_INTERLACE_NONE, PNG_COMPRESSION_TYPE_DEFAULT,
               PNG_FILTER_TYPE_DEFAULT);
  png_write_info(png, info);

  png_write_image(png, row_pointers);
  png_write_end(png, nullptr);

  for (int y = 0; y < height; ++y) {
    delete[] row_pointers[y];
  }
  delete[] row_pointers;

  png_destroy_write_struct(&png, &info);
  fclose(fp);
}
