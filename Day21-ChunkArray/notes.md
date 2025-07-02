# 📦 `chunkArray` Utility Function in JavaScript

## ✅ Problem Statement

Write a function `chunkArray(arr, size)` that splits an array into **chunks** of a specified size.

Each chunk is a sub-array of up to `size` elements, preserving the order of the original array.

---

## 🔧 Function Definition

```js
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}



Absolutely! Let's break down the powerful JavaScript `slice()` method in detail — with clear **examples**, **use cases**, and **edge behavior**.

---

# 🧠 `Array.prototype.slice()` — Deep Dive

## ✅ What is `slice()`?

The `slice()` method **returns a shallow copy** of a portion of an array into a new array selected from:

* **`start` index (inclusive)**
* **`end` index (exclusive)**

👉 It does **not modify** the original array.

---

## 📘 Syntax

```js
arr.slice(start, end)
```

* `start` *(optional)*: Index to begin extraction. Defaults to `0`.
* `end` *(optional)*: Index **before** which to end extraction. Defaults to `arr.length`.

---

## 🔧 Basic Examples

### 📍 Example 1: Basic Slicing

```js
const arr = [10, 20, 30, 40, 50];
console.log(arr.slice(1, 4)); // [20, 30, 40]
```

* Starts at index `1` (20)
* Ends **before** index `4` (not including 50)

---

### 📍 Example 2: Slice Without `end`

```js
console.log(arr.slice(2)); // [30, 40, 50]
```

* Starts at index 2
* Goes to the end

---

### 📍 Example 3: Negative Indices

```js
console.log(arr.slice(-3, -1)); // [30, 40]
```

* `-3` counts 3 from the end → index 2
* `-1` stops before the last item

---

### 📍 Example 4: Copy the Whole Array

```js
const copy = arr.slice();
console.log(copy); // [10, 20, 30, 40, 50]
```

---

## 🧠 Key Properties

| Feature               | Description                                     |
| --------------------- | ----------------------------------------------- |
| 🔄 Immutable          | Original array is not modified                  |
| 🔢 Supports negatives | Negative indices count from the end             |
| 📤 Shallow copy       | Only top-level values are copied                |
| 🧪 Array-like objects | Works on array-like (e.g. arguments, NodeLists) |

---

## 🚫 Not to Confuse With:

* `splice()` — **modifies** the array (adds/removes)
* `substring()` — works on strings

---

## 🧪 Real-World Use Cases

### ✅ Pagination

```js
const page = 1;
const pageSize = 5;
const data = [/* 100 items */];

const currentPageItems = data.slice(page * pageSize, (page + 1) * pageSize);
```

---

### ✅ Chunking Arrays

Used in your earlier example:

```js
arr.slice(i, i + size)
```

---

### ✅ Cloning Arrays Safely

```js
const clone = arr.slice(); // or [...arr]
```

---

## ❓Edge Cases

| Input           | Output       | Explanation                      |
| --------------- | ------------ | -------------------------------- |
| `slice(2, 2)`   | `[]`         | start and end are same           |
| `slice(4, 2)`   | `[]`         | start > end → empty result       |
| `slice(100)`    | `[]`         | start beyond length → empty      |
| `slice(-2)`     | Last 2 items | counts from end                  |
| `slice(0, 100)` | Full array   | end exceeds array → stops at end |

---

## 💡 Summary

| Feature         | `slice()`                                |
| --------------- | ---------------------------------------- |
| Modifies array? | ❌ No                                     |
| Returns?        | New array                                |
| Input?          | `start`, `end` (optional, non-inclusive) |
| Use cases       | Pagination, cloning, chunking            |

---



Great question! Negative indices in `slice()` can be a bit tricky at first, but once you understand how they work, they’re incredibly useful.

---

## 🧠 Understanding Negative Indices in `slice()`

### ✅ Rule:

If an index is **negative**, JavaScript treats it as:

```js
array.length + negativeIndex
```

This means:

* `-1` → the **last** element
* `-2` → second to last
* `-3` → third to last
* and so on...

---

### 🧪 Example

```js
const arr = [10, 20, 30, 40, 50];
// Indexes:   0   1   2   3   4
// Negatives: -5 -4  -3  -2  -1
```

### 🔍 Example 3 from earlier:

```js
arr.slice(-3, -1)
```

### Step-by-step:

1. Convert negative indices:

   * `-3` becomes `arr.length + (-3)` → `5 - 3 = 2`
   * `-1` becomes `5 - 1 = 4`

2. So it becomes:

   ```js
   arr.slice(2, 4)  // [30, 40]
   ```

✅ Result: `30` (index 2), `40` (index 3)
⛔ Not `50` (index 4), because the end index is exclusive.

---

### 🧪 More Negative Examples

```js
arr.slice(-2);      // [40, 50]
arr.slice(-4, -2);  // [20, 30]
arr.slice(-1);      // [50]
arr.slice(-5, -3);  // [10, 20]
```

---

## 💡 Summary

| Code            | Translates To | Output     |
| --------------- | ------------- | ---------- |
| `slice(-3, -1)` | `slice(2, 4)` | `[30, 40]` |
| `slice(-2)`     | `slice(3)`    | `[40, 50]` |
| `slice(-1)`     | `slice(4)`    | `[50]`     |
| `slice(-5, -3)` | `slice(0, 2)` | `[10, 20]` |

---

: Get last 2 items of array


const arr = ["a", "b", "c", "d"];
console.log(arr.slice(-2)); // Output?


const arr = ['x', 'y', 'z'];
arr.splice(-1, 1); // removes last item

console.log(arr); // ['x', 'y']



```js
const arr = [1, 2, 3, 4, 5];
arr.splice(2); // delete everything from index 2

console.log(arr); // [1, 2]
```


--------------------------------------------------------------------------------------------------------------
Absolutely! Let's take a **deep dive into `Array.prototype.splice()`** — one of the most powerful (and potentially dangerous) methods in JavaScript arrays because it **modifies the original array**.

---

# 🔪 JavaScript `splice()` – Deep Dive

## ✅ What is `splice()`?

The `splice()` method **changes the contents** of an array by:

* Removing elements
* Replacing elements
* Adding new elements

> 🧨 Unlike `slice()`, it **mutates** the original array!

---

## 📘 Syntax

```js
array.splice(start, deleteCount, item1, item2, ..., itemN)
```

| Parameter     | Description                                        |
| ------------- | -------------------------------------------------- |
| `start`       | Index at which to start changing the array         |
| `deleteCount` | Number of elements to remove                       |
| `item1..n`    | Optional items to insert starting at `start` index |

🔁 Returns an array of **deleted items**.

---

## 🧪 Examples

### 🧹 Example 1: Remove Elements

```js
const arr = [10, 20, 30, 40];
const removed = arr.splice(1, 2); // remove 2 items from index 1

console.log(arr);    // [10, 40]
console.log(removed); // [20, 30]
```

---

### ➕ Example 2: Insert Elements

```js
const arr = [1, 4, 5];
arr.splice(1, 0, 2, 3); // from index 1, delete 0, insert 2, 3

console.log(arr); // [1, 2, 3, 4, 5]
```

---

### 🔁 Example 3: Replace Elements

```js
const arr = ['a', 'b', 'c'];
arr.splice(1, 1, 'x'); // at index 1, remove 1 item, insert 'x'

console.log(arr); // ['a', 'x', 'c']
```

---

### ⛔ Example 4: Delete All from a Point

```js
const arr = [1, 2, 3, 4, 5];
arr.splice(2); // delete everything from index 2

console.log(arr); // [1, 2]
```

---

## 📌 Important Notes

| Behavior                   | Explanation                                     |
| -------------------------- | ----------------------------------------------- |
| 🔁 Mutates array           | Changes original array in place                 |
| 🎯 `start` can be negative | Counts from the end (like `slice()`)            |
| 🧤 Optional insertion      | `deleteCount` can be 0 for insert-only          |
| ❗ Use carefully            | Splice is destructive and not always reversible |

---

### 🔄 Negative Indices

```js
const arr = ['x', 'y', 'z'];
arr.splice(-1, 1); // removes last item

console.log(arr); // ['x', 'y']
```

---

## 🧠 Common Use Cases

### ✅ Remove item by value

```js
const arr = ['a', 'b', 'c'];
const index = arr.indexOf('b');
if (index !== -1) arr.splice(index, 1);
console.log(arr); // ['a', 'c']
```

---

### ✅ Replace part of array (in-place map)

```js
const arr = [1, 2, 3];
arr.splice(1, 1, arr[1] * 10);
console.log(arr); // [1, 20, 3]
```

---

## ⚖️ Comparison: `splice()` vs `slice()`

| Feature        | `splice()`                          | `slice()`                              |
| -------------- | ----------------------------------- | -------------------------------------- |
| Modifies array | ✅ Yes                               | ❌ No                                   |
| Returns        | Removed elements                    | Extracted (copied) elements            |
| Use case       | Insert, delete, or replace in place | Copy or extract data non-destructively |

---

## ✅ Mini Quiz (Test Yourself)

What will the following return?

```js
const arr = [0, 1, 2, 3, 4];
arr.splice(2, 2, 99, 100);
```

🧠 Think:

* Start at index `2`
* Remove 2 items (`2`, `3`)
* Insert `99`, `100`

✅ Result:

```js
// arr: [0, 1, 99, 100, 4]
// returned: [2, 3]
```

---


