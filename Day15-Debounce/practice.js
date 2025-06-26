/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */



// 
var debounce = function(fn, t) {
    let timeoutId = null;
    return function(...args) {
        
        if (timeoutId) {
            clearTimeout(timeoutId); // Clear the previous timeout if it exists
        }
        timeoutId = setTimeout(() => {
            fn(...args); // Call the function after the specified time
        }, t);
    }
};


  const log = debounce(console.log, 100);
//   log('Hello'); // cancelled
//   log('Hello'); // cancelled
//   log('Hello'); // Logged at t=100ms
  console.log(log('Hello')); // Immediately logged
   console.log(log('Hello'));
     console.log(log('Hello'));