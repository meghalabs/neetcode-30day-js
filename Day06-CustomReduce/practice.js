/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result =  init;

    for (let i = 0; i < nums.length; i++) { 
        result = fn(result, nums[i]);
        }    
    return result;


};

const nums = [1, 2, 3, 4,5];

function sum(accum, curr) {
    return accum + curr;
}

console.log(nums.reduce(sum, 0)); // Output: 15

console.log(nums.reduce((accum, current) => { return accum + current; }));

console.log(reduce(nums, sum, 0)); // Output: 15




// Example usage:
// nums = [1, 2, 3, 4]
// fn = function sum(accum, curr) { return accum + curr; }



