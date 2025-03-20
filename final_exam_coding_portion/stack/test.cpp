// Copyright (c) 2025 Ethan Sifferman.
// All rights reserved. Distribution Prohibited.

#include <iostream>

#include "stack.h"

int main() {
  Stack<int> stack;

  try {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    std::cout << "Top element: " << stack.peek() << std::endl;
    stack.pop();
    std::cout << "Top element after pop: " << stack.peek() << std::endl;
  } catch (const std::exception& e) {
    std::cerr << "Error: " << e.what() << std::endl;
  }

  return 0;
}
