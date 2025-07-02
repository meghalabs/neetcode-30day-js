
# 🧪 JavaScript Practice Worksheet: `slice()` & `splice()`

## 🎯 Purpose
This worksheet will help you master the `slice()` and `splice()` array methods through targeted examples and **real-world problem statements**. Learn when to use which method and why.

---

## ✂️ Part 1: `splice()` Practice

### ✅ Question 1: Basic Removal
```js
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2);
```

What is the value of `arr` and `removed`?  - [1,4,5] [2,3]

---

### ✅ Question 2: Insert Items
```js
const arr = ['a', 'd'];
arr.splice(1, 0, 'b', 'c');
```

What does `arr` look like? [a,b,c,d]

---

### ✅ Question 3: Replace Items
```js
const arr = [100, 200, 300];
arr.splice(1, 1, 250);
```

Final state of `arr`? 1,250,300
---

### ✅ Question 4: Delete All After Index
```js
const arr = [9, 8, 7, 6, 5];
arr.splice(2);
```
[9,8]

---

### ✅ Question 5: Negative Index
```js
const arr = ['x', 'y', 'z'];
arr.splice(-2, 1, 'Y');
```

---

### ✅ Question 6: Combo Insert & Delete
```js
const arr = [10, 20, 30, 40];
const removed = arr.splice(1, 2, 25, 35, 45);
```

---

### ✅ Bonus: Remove First Match
Write a function to remove the first match of a given value using `splice()`.

```js
function removeFirst(arr, value) {
  // Your code
  const index = arr.indexOf(value)
  return arr.splice(index, 1)
}
```

---

## 🍰 Part 2: `slice()` Practice

### ✅ Question 1: Middle Elements
```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4));
```

---

### ✅ Question 2: Clone an Array
```js
const copy = arr.slice();
```

---

### ✅ Question 3: Last N Elements
```js
console.log(arr.slice(-2));
```

---

### ✅ Question 4: Empty Slice
```js
console.log(arr.slice(2, 2));
```

---

### ✅ Question 5: Negative Wraparound
```js
console.log(arr.slice(-3, -1));
```

---

## 🧠 Real-World Problems: When to Use `slice()` vs `splice()`

### 🔄 Problem 1: Pagination (Use `slice()`)
> You have a list of 100 products and want to display 10 per page.

```js
function getPageItems(data, page, pageSize) {
  return data.slice(page * pageSize, (page + 1) * pageSize);
}
```

---

### ✂️ Problem 2: Delete and Insert in Place (Use `splice()`)
> Remove the second item and insert "NEW" and "ITEM".

```js
arr.splice(1, 1, "NEW", "ITEM");
```

---

### 🧼 Problem 3: Clean up unwanted values (Use `splice()` in a loop)
> Remove all `null` values from an array **in-place**.

```js
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === null) arr.splice(i, 1);
}
```

---

### 🧪 Problem 4: Create a copy of part of the array (Use `slice()`)
> Copy only the first 5 elements.

```js
const firstFive = arr.slice(0, 5);
```

---

### 🔁 Problem 5: Show last N history items (Use `slice(-n)`)
> Get the last 10 commands a user typed.

```js
const recent = commandLog.slice(-10);
```

---

## ✅ Summary

| Task                                | Use     |
|-------------------------------------|----------|
| Non-destructive copy               | `slice()` |
| Paginate / partial display         | `slice()` |
| Insert/Remove/Replace in-place     | `splice()` |
| Clean-up or filter while mutating  | `splice()` |
| Clone array                        | `slice()` |

---

Happy coding! 🚀
