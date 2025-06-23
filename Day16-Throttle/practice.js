/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var throttle = function(fn, t) {
   
  return function(...args) {
 let throttled = false; // Flag to check if the function is throttled
 let nextArgs = null; // Store the next arguments to be passed

    if(throttled) {
      nextArgs = args; // Store the next arguments if throttled
    //wait for the specified time before calling the function again

  }
  else {
    fn(...args); // Call the function immediately
    throttled = true; // Set the flag to true
    // setTimeout(() => {
    //   throttled = false; // Reset the flag after t milliseconds
    // }, t);
    setTimeout(helper, t);

    // make throttled true nad check scheduled called during the throttled period
    // if so call the function with the next arguments
    function helper(){
      if(nextArgs) {
        fn(...nextArgs); // Call the function with the next arguments
        setTimeout(helper, t); // Schedule the next call
         nextArgs = null; // Clear the next arguments

      }
      else {
        throttled = false; // Reset the flag if no next arguments
      }
    }

  }
};
}

//   const log = throttle(console.log, 100);
// //   log('Hello'); // cancelled
// //   log('Hello'); // cancelled
// //   log('Hello'); // Logged at t=100ms
//   console.log(log('Hello')); // Immediately logged
//    console.log(log('Hello'));
//      console.log(log('Hello'));


     const fn = () => console.log('Triggered at:', Date.now());
const throttled = throttle(fn, 300);

setInterval(throttled, 100); // Will log once every 300ms
