/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = [];
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        // Call the function fn with the current element and its index
        // and push the result into the result array
        // result.push(fn(arr[i], i, ...args));  result is const but we can change its content by using push  
        result.push(fn(arr[i], i));
    }
    return result;

    // Alternative using Map method
    // return arr.map(fn)

    // Alternative using for...of loop
    // for(const i in arr) {   
    //     // Call the function fn with the current element and its index
    //     // and push the result into the result array
    //     // it has to conver into a number since i can be a string for example { name: "John", age: 30 }
    //     res.push(fn(arr[i],Number(i) ));
    // }
    // return res


};

//fucntional vs procedural programming
// Example usage


arr = [1, 2, 3]
fn = function plusI(n, i) { return n + i; }
const result = map(arr, fn);
console.log(result); // Output: [1, 3, 5]



// Passing function another function is strategy design pattern called "Higher-Order Function"