## Day 15 - Throttle
## Throttle Function in JavaScript

## 📌 What is Throttling?

**Throttling** is a technique used to control how often a function is allowed to be executed over time. 

When a function is **throttled**, it is only allowed to run **once every `t` milliseconds**, no matter how many times it's triggered within that period.

---

## 💡 Use Case

Throttle is especially useful for:
- Scroll events
- Resize events
- Mouse move or drag events
- API rate limiting

---

## ✅ Expected Behavior

If a function is called repeatedly, it will execute:
- **Immediately** on the first call
- **Then at most once every `t` milliseconds** afterward

### Example Timeline (`t = 100ms`)


| Feature      | Debounce                       | Throttle                           |
| ------------ | ------------------------------ | ---------------------------------- |
| When it runs | After the last call stops      | At regular intervals               |
| Use case     | Autocomplete, input validation | Scroll/resize event handlers       |
| Frequency    | Executes once at the end       | Executes at most once every `t` ms |
| Cancelable   | Yes                            | Only skips intermediate executions |


🧠 Key Points
Throttle limits executions per time window.

The function executes immediately and then waits for the throttle window before executing again.

Great for performance optimization on high-frequency events.

