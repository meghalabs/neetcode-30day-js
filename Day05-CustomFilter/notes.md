## Day 5 - Custom Filter Function

# 🚫 Custom Filter Function

## 🧩 Problem Statement

Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:
- `arr[i]`: a number from the array
- `i`: the index of `arr[i]`

The `filteredArr` should only contain the elements from the `arr` for which the expression `fn(arr[i], i)` evaluates to a **truthy** value.

> A **truthy** value is any value that evaluates to `true` when passed to `Boolean(value)`.

**You must solve this without using the built-in `Array.filter` method.**

---

## ✅ Example 1

**Input:**
```js
arr = [0, 10, 20, 30]
fn = function greaterThan10(n) { return n > 10; }
```

**Output:**
```js
[20, 30]
```

**Explanation:**  
The function filters out values that are not greater than 10.

---

## ✅ Example 2

**Input:**
```js
arr = [1, 2, 3]
fn = function firstIndex(n, i) { return i === 0; }
```

**Output:**
```js
[1]
```

**Explanation:**  
The function keeps only the element at index 0.

---

## ✅ Example 3

**Input:**
```js
arr = [-2, -1, 0, 1, 2]
fn = function plusOne(n) { return n + 1; }
```

**Output:**
```js
[-2, 0, 1, 2]
```

**Explanation:**  
Falsy values such as `0` (i.e., `n + 1 === 0`) are filtered out.

---

## 📏 Constraints

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`

---

## 💡 Notes

This problem is a great way to:
- Understand truthy vs falsy evaluation
- Practice control flow without built-in helpers
- Reinforce the use of higher-order functions


### 📌 Resources
- [LeetCode](https://leetcode.com/problems/filter-elements-from-array/)
