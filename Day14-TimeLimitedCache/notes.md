## Day 14 - TimeLimitedCache
# TimeLimitedCache JavaScript Class

This document outlines the implementation of a `TimeLimitedCache` class, which manages key-value pairs with time-based expiration.

## Problem Statement

Design a class that allows setting and getting key-value pairs where each key has an associated time-to-live (TTL) in milliseconds.

### Methods:

- `set(key, value, duration)`: 
  - Sets the key with a value and TTL.
  - Returns `true` if the key exists and has not yet expired.
  - Returns `false` otherwise.
  - Overwrites the value and duration if key exists.

- `get(key)`:
  - Returns the value if the key is unexpired.
  - Returns `-1` if the key does not exist or is expired.

- `count()`:
  - Returns the number of currently active (unexpired) keys.

## Example 1

```js
actions = ["TimeLimitedCache", "set", "get", "count", "get"]
values = [[], [1, 42, 100], [1], [], [1]]
timeDelays = [0, 0, 50, 50, 150]

// Output: [null, false, 42, 1, -1]
