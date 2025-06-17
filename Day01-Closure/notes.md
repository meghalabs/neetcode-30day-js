## Day 1 - Variables & Data Types

##Create hello world Function :


### 🧩 Problem Statement:
Write a function `createHelloWorld`.  
It should return a **new function** that **always returns** `"Hello World"` — regardless of the arguments passed.

---

### ✅ Examples:

**Example 1:**
```js
Input: args = []
const f = createHelloWorld();
Output: f(); // "Hello World"



Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".


Closure 
Closures
An important topic in JavaScript is the concept of closures. When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.

function createAdder(a) {
    function f(b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createAdder(3);
console.log(f(4)); // 7
In this example, createAdder passes the first parameter a and the inner function has access to it. This way, createAdder serves as a factory of new functions, with each returned function having different behavior.

### ✅ Concepts Learned
- closure
- let, const, var
- Primitive types: number, string, boolean, null, undefined


### 💡 Key Takeaways
- Use `const` by default unless reassignment is needed.
- Avoid `var` due to hoisting issues.

### 🤔 Things to Review Later
- Type coercion rules

### 📌 Resources
- [MDN - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- [leet code] : https://leetcode.com/problems/create-hello-world-function/description/