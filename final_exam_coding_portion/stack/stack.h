// Copyright (c) 2025 Ethan Sifferman.
// All rights reserved. Distribution Prohibited.

#pragma once

#include <array>
#include <stdexcept>

template <typename T>
class Stack {
 public:
  // max size of stack
  static constexpr size_t N = 5;

 private:
  std::array<T, N> d;  // data inside stack
  std::size_t top;

 public:
  Stack() : top(0) {}

  void push(const T& value) {
    if (top >= N) {
      throw std::overflow_error("Stack overflow");
    }
    d[top++] = value;
  }

  void pop() {
    if (top == 0) {
      throw std::underflow_error("Stack underflow");
    }
    top--;
  }

  T peek() {
    if (top == 0) {
      // std::cerr << "Debug" << std::endl;
      throw std::underflow_error("Stack is empty");
    }
    return d[top - 1];
  }

  bool StackIsEmpty() {
    bool full;
    if (top == 0)
      full = true;
    else
      full = false;
    return full;
  }

  bool isFull() {
    if (top == 5)
      return true;
    else
      return false;
  }

  // This function will return the number of elements inside of the stack object
  std::size_t s() const { return top; }
};
