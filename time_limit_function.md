# ⏱️ Time Limited Function (Async)

## 🧩 Problem Statement

Given an asynchronous function `fn` and a time `t` in milliseconds, return a **new time-limited version** of the input function. The new function should behave as follows:

- ✅ If `fn` completes **within** the time limit of `t` milliseconds, it should **resolve** with the result.
- ❌ If `fn` takes **longer than `t` ms**, it should **reject** with the string `"Time Limit Exceeded"`.

---

## ✅ Example 1

```js
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
```

**Output:**
```json
{ "rejected": "Time Limit Exceeded", "time": 50 }
```

**Explanation:** The function is set to resolve after 100ms, but the time limit is only 50ms. It rejects at 50ms.

---

## ✅ Example 2

```js
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 150
```

**Output:**
```json
{ "resolved": 25, "time": 100 }
```

**Explanation:** The function resolves at 100ms, which is within the 150ms time limit.

---

## ✅ Example 3

```js
fn = async (a, b) => { 
  await new Promise(res => setTimeout(res, 120)); 
  return a + b; 
}
inputs = [5, 10]
t = 150
```

**Output:**
```json
{ "resolved": 15, "time": 120 }
```

**Explanation:** Resolves in time, result is `a + b`.

---

## ✅ Example 4

```js
fn = async () => { 
  throw "Error"; 
}
inputs = []
t = 1000
```

**Output:**
```json
{ "rejected": "Error", "time": 0 }
```

**Explanation:** The function throws immediately.

---

## 🛠️ Constraints

- `0 <= inputs.length <= 10`
- `0 <= t <= 1000`
- `fn` returns a **Promise**

---

## 💡 Usage Pattern

```js
const limited = timeLimit(fn, t);
const start = performance.now();
let result;
try {
   const res = await limited(...inputs);
   result = { "resolved": res, "time": Math.floor(performance.now() - start) };
} catch (err) {
   result = { "rejected": err, "time": Math.floor(performance.now() - start) };
}
console.log(result);
```

This structure allows you to measure the execution time and handle whether it resolved or was rejected.
