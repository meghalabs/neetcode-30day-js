// Day 2 - counter


/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;
    //use a closure to maintain the state of count
    //every time the returned function is called, it will increment count
    //and return the current value of count
    //this way, the count variable is not accessible from outside the function
    return function() {
        return count++;
    };
};

class Counter {
  constructor(n) {
    this.count = n;
  }
  increment() {
    return this.count++;
  }
}

const counter2 = Counter(10)
// Example usage
// Create a counter starting from 10
  const counter = createCounter(10)
  const a = counter() // 10
  const b = counter() // 11
  const c = counter() // 12

  console.log(a, b, c); // Output: 10 11 12

  /** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */