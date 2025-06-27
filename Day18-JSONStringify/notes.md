# 🧠 Convert JSON Object to String Without `JSON.stringify()`

In JavaScript, `JSON.stringify()` is the built-in method to convert objects into JSON-formatted strings. However, understanding how to do it manually helps build a deeper understanding of object structures, recursion, and serialization.

---

## 📌 Goal

Create a custom function that mimics `JSON.stringify()` behavior for basic JSON objects and arrays.

---

## ✅ Supported Types

This version handles:

- Primitives: `number`, `string`, `boolean`, `null`
- Arrays
- Objects (excluding functions, symbols, and circular references)

---

## 🧪 Example

```js
const input = {
  name: "Alice",
  age: 30,
  isStudent: false,
  scores: [95, 87, 92],
  profile: { city: "New York", zip: 10001 },
  extra: null
};

console.log(stringify(input));
```

**Expected Output:**

```json
{"name":"Alice","age":30,"isStudent":false,"scores":[95,87,92],"profile":{"city":"New York","zip":10001},"extra":null}
```

---

## 🧩 Implementation

```js
function stringify(value) {
  if (typeof value === 'string') {
    return `"${value}"`;
  }

  if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    return String(value);
  }

  if (Array.isArray(value)) {
    const items = value.map(item => stringify(item));
    return `[${items.join(',')}]`;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value).map(([key, val]) => {
      return `"${key}":${stringify(val)}`;
    });
    return `{${entries.join(',')}}`;
  }

  // If value is a function, undefined, or symbol (not JSON serializable)
  return undefined;
}
```

---

## 🚫 Limitations

- Does **not handle** circular references
- Ignores `undefined`, functions, and symbols (like native JSON.stringify)
- No support for custom `toJSON` methods or indentation formatting

---

## 🎓 Summary

Creating your own `stringify()`:
- Improves your understanding of serialization
- Helps with interview questions on recursion or data structures
- Prepares you for building tools like custom serializers or loggers
