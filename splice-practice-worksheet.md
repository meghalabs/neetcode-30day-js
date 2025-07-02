
# ✂️ JavaScript `splice()` Practice Worksheet

## 🧠 Instructions
Try to solve each question **without running the code** first. Then verify your answers by testing them in the browser console or a code editor.

---

### ✅ Question 1: Basic Removal

```js
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2);
```

❓ What is the value of `arr` and `removed`?

---

### ✅ Question 2: Insert Items

```js
const arr = ['a', 'd'];
arr.splice(1, 0, 'b', 'c');
```

❓ What does `arr` look like after this?

---

### ✅ Question 3: Replace Items

```js
const arr = [100, 200, 300];
arr.splice(1, 1, 250);
```

❓ What’s the final state of `arr`?

---

### ✅ Question 4: Delete All After Index

```js
const arr = [9, 8, 7, 6, 5];
arr.splice(2);
```

❓ What remains in `arr`?

---

### ✅ Question 5: Negative Index

```js
const arr = ['x', 'y', 'z'];
arr.splice(-2, 1, 'Y');
```

❓ What’s the final result of `arr`?

---

### ✅ Question 6: Combine Insert & Delete

```js
const arr = [10, 20, 30, 40];
const removed = arr.splice(1, 2, 25, 35, 45);
```

❓ What is `arr`? What is `removed`?

---

## 🧪 Bonus Challenge

Write a function that removes the first occurrence of a value in an array **using `splice()`**:

```js
function removeFirst(arr, value) {
  // Your code here
}
```

Test it:

```js
const arr = [1, 2, 3, 2, 4];
removeFirst(arr, 2);
// arr should now be: [1, 3, 2, 4]
```

---

## ✅ Answers (Hidden — scroll down when ready)

---

### 📥 Answers

1. `arr = [1, 4, 5]`, `removed = [2, 3]`
2. `arr = ['a', 'b', 'c', 'd']`
3. `arr = [100, 250, 300]`
4. `arr = [9, 8]`
5. `arr = ['x', 'Y', 'z']`
6. `arr = [10, 25, 35, 45, 40]`, `removed = [20, 30]`

---

Happy Coding! 🚀
