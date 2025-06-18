# 🔁 Function Composition

## 🧩 Problem Statement

Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function `fn` that is the **function composition** of the array of functions.

Function composition means:
```js
fn(x) = f1(f2(f3(...(x))))
```

> If the list of functions is empty, the result should be the **identity function**:
```js
f(x) = x
```

Each function in the array accepts one integer as input and returns one integer as output.

---

## ✅ Example 1

**Input:**
```js
functions = [x => x + 1, x => x * x, x => 2 * x]
x = 4
```

**Output:**
```js
65
```

**Explanation:**
Evaluating from **right to left**:
```
Start with x = 4
2 * 4 = 8
8 * 8 = 64
64 + 1 = 65
```

---

## ✅ Example 2

**Input:**
```js
functions = [x => 10 * x, x => 10 * x, x => 10 * x]
x = 1
```

**Output:**
```js
1000
```

**Explanation:**
```
10 * 1 = 10
10 * 10 = 100
10 * 100 = 1000
```

---

## ✅ Example 3

**Input:**
```js
functions = []
x = 42
```

**Output:**
```js
42
```

**Explanation:**
The composition of zero functions is the **identity function**, so the input is returned unchanged.

---

## 📏 Constraints

- `-1000 <= x <= 1000`
- `0 <= functions.length <= 1000`
- All functions accept and return a single integer

---

## 💡 Notes

This is a great example of:
- Higher-order functions
- Functional programming principles
- Working with function pipelines from right to left

Use this pattern when building data transformation chains or middleware-style logic.
