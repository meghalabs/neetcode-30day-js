## Day 5 - Custom Filter Function

# 🔁 Call a Function Only Once

## 🧩 Problem Statement

Given a function `fn`, return a new function that behaves identically to `fn` but ensures it is called **at most once**.

- On the **first call**, it should return the result of `fn`.
- On **every subsequent call**, it should return `undefined` without calling `fn`.

---

## ✅ Example 1

**Input:**
```js
fn = (a, b, c) => a + b + c
calls = [[1, 2, 3], [2, 3, 6]]
```

**Output:**
```js
[{ "calls": 1, "value": 6 }]
```

**Explanation:**
```js
const onceFn = once(fn);
onceFn(1, 2, 3); // returns 6
onceFn(2, 3, 6); // returns undefined
```

---

## ✅ Example 2

**Input:**
```js
fn = (a, b, c) => a * b * c
calls = [[5, 7, 4], [2, 3, 6], [4, 6, 8]]
```

**Output:**
```js
[{ "calls": 1, "value": 140 }]
```

**Explanation:**
```js
const onceFn = once(fn);
onceFn(5, 7, 4); // returns 140
onceFn(2, 3, 6); // returns undefined
onceFn(4, 6, 8); // returns undefined
```

---

## 📏 Constraints

- `calls` is a valid JSON array
- `1 <= calls.length <= 10`
- `1 <= calls[i].length <= 100`
- `2 <= JSON.stringify(calls).length <= 1000`

---

## 💡 Notes

This is a great exercise in:
- Closures and scope
- Maintaining state between function calls
- Building higher-order utility functions

Common use cases include:
- Initialization handlers
- Single-click event protection
- Idempotent operations

### 📌 Resources
- [LeetCode](https://leetcode.com/problems/memoize/description/)
