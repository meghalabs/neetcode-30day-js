## Day 17 - Json Deep Euqal

# 🔍 JSON Deep Equality in JavaScript

## 📌 What is Deep Equality?

**Deep equality** checks whether two JSON-like objects (including nested structures) have **identical keys and values**, not just reference equality.

> `a === b` only checks if both variables point to the same object in memory.  
> Deep equality checks if the actual **content** is the same.

---

## 🧪 Example

```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

obj1 === obj2;           // false (different references)
deepEqual(obj1, obj2);   // true  ✅ (same content)


Notes :
let a = [1,2]
let b = {0:1,1:2}


typeof(a) === typeof(b) = "object"
Array.isArray(a) //true

let c
let d = null;

typeof(c) //undefined
typeof(d) //object

const e = [undfined]
const f = {a:1}

a[0] === b[0] //true
```
