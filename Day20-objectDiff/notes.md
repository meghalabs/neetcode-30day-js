
# 🧠 Deep Difference Detector

## ✅ Problem Statement

Write a function that accepts two deeply nested objects or arrays `obj1` and `obj2` and returns a new object representing their differences.

- The function should compare the properties of the two objects and identify any changes.
- The returned object should only contain keys where the value is different from `obj1` to `obj2`.
- For each changed key, the value should be represented as an array: `[obj1 value, obj2 value]`.
- Keys that exist in one object but not in the other should **not** be included in the returned object.
- When comparing two arrays, the indices of the arrays are considered to be their keys.
- The end result should be a deeply nested object where each leaf value is a difference array.

> You may assume that both objects are the output of `JSON.parse`.

---

## 🧪 Example 1

### Input:
```js
obj1 = {};
obj2 = {
  "a": 1,
  "b": 2
};
```

### Output:
```js
{}
```

### Explanation:
There were no modifications made to `obj1`. New keys `"a"` and `"b"` appear in `obj2`, but added/removed keys are ignored.

---

## 🧪 Example 2

### Input:
```js
obj1 = {
  "a": 1,
  "v": 3,
  "x": [],
  "z": {
    "a": null
  }
};

obj2 = {
  "a": 2,
  "v": 4,
  "x": [],
  "z": {
    "a": 2
  }
};
```

### Output:
```js
{
  "a": [1, 2],
  "v": [3, 4],
  "z": {
    "a": [null, 2]
  }
}
```

---

## 🧪 Example 3

### Input:
```js
obj1 = {
  "a": 5,
  "v": 6,
  "z": [1, 2, 4, [2, 5, 7]]
};

obj2 = {
  "a": 5,
  "v": 7,
  "z": [1, 2, 3, [1]]
};
```

### Output:
```js
{
  "v": [6, 7],
  "z": {
    "2": [4, 3],
    "3": {
      "0": [2, 1]
    }
  }
}
```

### Explanation:
In `z`, index `2` changed from `4 → 3`, and `z[3][0]` changed from `2 → 1`.


Take away: 
// if both primitive and diff then take diff
//one preminive one obj then take diff
// one is araay and another is object then take diff 
if both array or both object then go recursive 
