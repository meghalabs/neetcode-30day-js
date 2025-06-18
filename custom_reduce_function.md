# ➕ Custom Reduce Function

## 🧩 Problem Statement

Given:
- An integer array `nums`
- A reducer function `fn`
- An initial value `init`

Return the final result obtained by executing the `fn` function on each element of the array sequentially.  
Each call to `fn` passes in the **accumulated result so far** and the **current array element**.

The operations should follow this pattern:

```
val = fn(init, nums[0])
val = fn(val, nums[1])
val = fn(val, nums[2])
...
```

Return the final `val` after processing all elements.

> If the array is empty, return `init`.

**Do not use the built-in `Array.reduce()` method.**

---

## ✅ Example 1

**Input:**
```js
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
```

**Output:**
```js
10
```

**Explanation:**
```
(0) + 1 = 1  
(1) + 2 = 3  
(3) + 3 = 6  
(6) + 4 = 10
```

---

## ✅ Example 2

**Input:**
```js
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
```

**Output:**
```js
130
```

**Explanation:**
```
(100) + 1^2 = 101  
(101) + 2^2 = 105  
(105) + 3^2 = 114  
(114) + 4^2 = 130
```

---

## ✅ Example 3

**Input:**
```js
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
```

**Output:**
```js
25
```

**Explanation:**  
Since the array is empty, return the `init` value.

---

## 📏 Constraints

- `0 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`
- `0 <= init <= 1000`

---

## 💡 Notes

This challenge builds understanding of:
- Accumulator patterns
- Pure functions
- How JavaScript’s `reduce()` works under the hood

Perfect for foundational functional programming practice!
