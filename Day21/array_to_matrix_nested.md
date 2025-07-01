
# 🧠 Convert Array of Objects to Matrix Format

This transformation involves **flattening nested keys** and **merging all unique keys across the array of objects** into a unified header row. Each object in the array then contributes a row where **missing keys are filled with empty strings**.

---

## 📌 Key Observations from Examples

### ✅ Example 3: Nested Objects

**Input:**
```js
[
  { "a": { "b": 1, "c": 2 } },
  { "a": { "b": 3, "d": 4 } }
]
```

**Output:**
```js
[
  ["a.b", "a.c", "a.d"],
  [1, 2, ""],
  [3, "", 4]
]
```

**Explanation:**
- The function flattens nested keys like `a.b`, `a.c`, `a.d`.
- For missing keys, it inserts an empty string (`""`).

---

### ✅ Example 4: Arrays of Objects

**Input:**
```js
[
  [{ "a": null }],
  [{ "b": true }],
  [{ "c": "x" }]
]
```

**Output:**
```js
[
  ["0.a", "0.b", "0.c"],
  [null, "", ""],
  ["", true, ""],
  ["", "", "x"]
]
```

**Explanation:**
- Arrays are treated as objects with keys like `0.a`, `0.b`, `0.c`.
- The matrix aligns values by these flattened paths.
- Sparse elements are padded with empty strings.

---

## 🛠️ How This Works Internally

1. **Flatten Each Object:** Recursively flatten nested paths into dot-notation (`a.b`, `0.a`, etc.).
2. **Build Column Headers:** Collect all unique flattened keys across the objects.
3. **Build Rows:** For each object, map the known keys to their values and fill in `""` where data is missing.
