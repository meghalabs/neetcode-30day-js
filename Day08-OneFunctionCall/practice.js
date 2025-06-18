/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];
    //imperative programming - procedural programming
    for (let i = 0; i < arr.length; i++) {
        // Call the function fn with the current element and its index
        // If the function returns true, push the element into the result array
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;


    //functional programming - declarative programming
    //    const res = arr.filter((n,i)=> {n>10}); // Alternative using filter method

//     const res = arr.filter(fn); 
//    return res
};
// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20, 30]
const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) { return n > 10; };
const result = filter(arr, fn);
console.log(result); // Output: [20, 30]



//truthy // falsy values in JavaScrip
//nullish coalescing operator ??
//undefined, null, 0, NaN, "", false 
const n = "" ?? "hello"