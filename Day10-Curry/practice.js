
/** * @param {Function} fn
 * @return {Function}
 * 
 * 
 * **/

/**higher-order function that takes a function `fn` and returns a new function that can be called with any number of arguments, returning the result of calling `fn` with those arguments.
 * The returned function can be called multiple times, accumulating the arguments until it is finally called with no arguments, at which point it will return the result of calling `fn` with all accumulated arguments.
**/


var curry = function(fn) {
  let nums = []// TRY TO ACCUMULATE ALL THE PARAMS 1,2,3
      // return function curries(...args) {
      //   nums = [...nums, ...args]; // accumulate the args
      //     // we have to check if function and list of args reqyuired to run the function is equal then we can call the function 
      //     if (fn.length === nums.length) {
      //       const result = fn(...nums);
      //       // reset nums to empty array for next call
      //       console.log("Function called with args:", nums, "Result:", result);
      //       nums = [];
      //       // return the result of the function call
      //       return fn(...nums);
      //     } else {
      //       //when we dont have enouygh args to call the function
      //       // we can return a new function that will accept more args
      //       console.log("other nums: ",...nums)
      //       return curries
            
      //     }
      // }

        return function curries(...args) {
              if (fn.length === args.length){
                return fn(...args);
              } else {
                // if we don't have enough args to call the function
                // we can return a new function that will accept more args
              
                return function(...moreArgs) {
                  return curries(...args, ...moreArgs);``
                }
              }
            }


}

function sum(a,b,c){return a + b + c;}
const curries = curry(sum);
console.log(curries(1)(2)(3)); // 6
console.log(curries(4, 5)(8)); // 17