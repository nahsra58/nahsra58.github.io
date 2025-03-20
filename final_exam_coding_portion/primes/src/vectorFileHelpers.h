// Copyright (c) 2025 Ethan Sifferman.
// All rights reserved. Distribution Prohibited.

#include <filesystem>
#include <fstream>
#include <iostream>
#include <vector>

template <typename T>
void writeVectorToFile(const std::vector<T> &vec, const std::string &filepath) {
  std::filesystem::path file_path(filepath);
  std::filesystem::path dir = file_path.parent_path();

  if (!dir.empty() && !std::filesystem::exists(dir)) {
    std::filesystem::create_directories(dir);
  }

  std::ofstream outFile(filepath);
  if (!outFile) throw std::runtime_error("Unable to open file " + filepath);
  for (const auto &element : vec) outFile << element << "\n";
  outFile.close();
}

template <typename T>
void verifyVectorMatchesFile(const std::vector<T> &vec,
                             const std::string &filepath) {
  std::vector<T> fileContents;
  T value;

  std::ifstream inFile(filepath);
  if (!inFile) throw std::runtime_error("Unable to open file " + filepath);
  while (inFile >> value) fileContents.push_back(value);
  inFile.close();

  if (fileContents != vec) throw std::logic_error("Vectors do not match");
}
