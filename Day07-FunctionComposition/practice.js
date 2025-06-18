/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
    
        // for (const n of functions.reverse()) {
        //     x=n(x)
        // }
        // return x
       
       
       return functions.reduceRight((acc, fn) => fn(acc), x);
    }
   
};


  const fn = compose([x => x + 1, x => 2 * x])
    // Output: 9// Explanation: ((4 + 1) * 2) = 9                           
    console.log(fn(4)); // Output: 9

// 