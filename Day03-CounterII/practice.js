/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count =init
    const increment = () => ++count

    const decrement = () => --count
    const reset = () => {count = init; return count}
  
    // Return an object with the increment, decrement, and reset methods
    return { increment, decrement, reset };
}   

  const counter = createCounter(5)
  
  console.log(counter.increment()); // 6
  console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
 



