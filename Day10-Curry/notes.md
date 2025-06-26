## Day 5 - Custom Filter Function

# 🔁 Call a Function Only Once

## 🧩 Problem Statement

Currying in JavaScript is a functional programming technique that transforms a function accepting multiple arguments into a sequence of nested functions, each taking a single argument. This process allows for partial application of arguments, creating new, more specialized functions. 
How it works:
Instead of calling a function like sum(a, b, c), currying allows you to call it as sum(a)(b)(c). Each successive function call receives one argument and returns another function until all required arguments are provided, at which point the original function's logic is executed with the accumulated arguments.
```

// Non-curried function
const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(2, 3, 5)); // Output: 10

// Curried version
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(addCurry(2)(3)(5)); // Output: 10

// Simplified with arrow functions
const addCurryArrow = (a) => (b) => (c) => a + b + c;
console.log(addCurryArrow(2)(3)(5)); // Output: 10

### 📌 Resources
- [LeetCode](https://leetcode.com/problems/allow-one-function-call/description/)
