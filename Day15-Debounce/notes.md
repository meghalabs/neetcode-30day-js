## Day 15 - debounce
# Debounce Function in JavaScript

//we need to have a timer from settimeout and clearthe time out if timer is running 

## Problem Statement

Given a function `fn` and a time in milliseconds `t`, implement a **debounced** version of that function.

### What is Debounce?

A debounced function delays its execution until after `t` milliseconds have elapsed since the last time it was invoked. If it is called again within this `t` window, the previous scheduled call is **cancelled**.

### Requirements

- You must not use lodash’s `_.debounce()` or similar utilities.
- The debounced function should preserve and use the arguments passed during the last call.

---

## Function Signature

```js
function debounce(fn, t) {
  // Returns a debounced version of fn
}


t = 50
calls = [
  { t: 50, inputs: [1] },
  { t: 75, inputs: [2] }
]
Output: [{ "t": 125, "inputs": [2] }]
Explanation:

First call at 50ms is cancelled by the second at 75ms.

Second call executes at 75 + 50 = 125ms.



t = 20
calls = [
  { t: 50, inputs: [1] },
  { t: 100, inputs: [2] }
]
output:[{ "t": 70, "inputs": [1] }, { "t": 120, "inputs": [2] }]
First call runs at 50 + 20 = 70ms.

Second call runs at 100 + 20 = 120ms.





t = 150
calls = [
  { t: 50, inputs: [1, 2] },
  { t: 300, inputs: [3, 4] },
  { t: 300, inputs: [5, 6] }
]
output [{ "t": 200, "inputs": [1, 2] }, { "t": 450, "inputs": [5, 6] }]
First call executes at 50 + 150 = 200ms.

Second call is cancelled by the third.

Third call executes at 300 + 150 = 450ms.