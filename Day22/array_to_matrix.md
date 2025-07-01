# 📊 Convert Array of Objects to Matrix in JavaScript

## ✅ Problem Statement

Given an array of JavaScript objects, convert it into a 2D matrix (array of arrays), where:
- The **first row** is the list of unique keys across all objects (column headers).
- Each **subsequent row** represents the values of each object in the same column order.
- If an object doesn't contain a particular key, its value should be `""` (empty string).

---

## 🧪 Example

### Input:
```js
const data = [
  { name: "Alice", age: 30 },
  { name: "Bob", location: "NY" },
  { age: 22, location: "SF" }
];
```

### Output:
```js
[
  ["name", "age", "location"],
  ["Alice", 30, ""],
  ["Bob", "", "NY"],
  ["", 22, "SF"]
]
```

---

## 🔧 Solution

```js
function arrayToMatrix(arr) {
  // Step 1: Collect all unique keys
  const columnSet = new Set();
  arr.forEach(obj => {
    Object.keys(obj).forEach(key => columnSet.add(key));
  });
  const columns = Array.from(columnSet);

  // Step 2: Build the matrix
  const matrix = [columns]; // First row is the header
  for (const obj of arr) {
    const row = columns.map(col => (col in obj ? obj[col] : ""));
    matrix.push(row);
  }

  return matrix;
}
```

---

## 📌 Notes

- Order of keys in the header row depends on how they're collected (`Set` maintains insertion order).
- Empty string (`""`) is used for missing values to maintain matrix structure.
- Can be modified to use `null` or `undefined` instead.

---

## ✅ Usage

```js
const input = [
  { name: "Alice", age: 30 },
  { name: "Bob", location: "NY" },
  { age: 22, location: "SF" }
];

console.log(arrayToMatrix(input));
```

---

## 🧠 Tip

This technique is useful when preparing data for spreadsheets, tables, or CSV exports.
