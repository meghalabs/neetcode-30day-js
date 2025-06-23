## Day 11 - Sleep
# 🔁 Sleep

## 🧩 Problem Statement

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.



---

## ✅ Example 1# TimeLimitedCache JavaScript Class

This document outlines the implementation of a `TimeLimitedCache` class, which manages key-value pairs with time-based expiration.

## Problem Statement

Design a class that allows setting and getting key-value pairs where each key has an associated time-to-live (TTL) in milliseconds.

### Methods:

- `set(key, value, duration)`: 
  - Sets the key with a value and TTL.
  - Returns `true` if the key exists and has not yet expired.
  - Returns `false` otherwise.
  - Overwrites the value and duration if key exists.

- `get(key)`:
  - Returns the value if the key is unexpired.
  - Returns `-1` if the key does not exist or is expired.

- `count()`:
  - Returns the number of currently active (unexpired) keys.

## Example 1

```js
actions = ["TimeLimitedCache", "set", "get", "count", "get"]
values = [[], [1, 42, 100], [1], [], [1]]
timeDelays = [0, 0, 50, 50, 150]

// Output: [null, false, 42, 1, -1]

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
```


```

---

## ✅ Example 2
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.

---

## 📏 Constraints

- `calls` is a valid JSON array
- `1 <= calls.length <= 10`
- `1 <= calls[i].length <= 100`
- `2 <= JSON.stringify(calls).length <= 1000`

---

Notes :

any asyn method will retun promise

set timeout doesnt not block next line of code 

//promise special object in js : has 3 states : pending - not resolved , resolved -done, rejected .

new Promise ()

it expect : callback function
and callBack has resolve and reject 
then it does asyn operation - network call/ IO etc 

Meanwhile asyn non blocking code will be running
single threaded JS 
- limit CPU task 



### 📌 Resources
- [LeetCode](https://leetcode.com/problems/sleep/description/)
