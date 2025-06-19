## Day 5 - Custom Filter Function

# 🔁 Call a Function Only Once

## 🧩 Problem Statement

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.



---

## ✅ Example 1
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
```


```

---

## ✅ Example 2
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.

---

## 📏 Constraints

- `calls` is a valid JSON array
- `1 <= calls.length <= 10`
- `1 <= calls[i].length <= 100`
- `2 <= JSON.stringify(calls).length <= 1000`

---



### 📌 Resources
- [LeetCode](https://leetcode.com/problems/sleep/description/)
