/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};
  return function (...args) {
    const cacheKey = JSON.stringify(args);
    if (cacheKey in cache) {
      //  if(cache.has(...args)) {
      // const cacheKey = JSON.stringify(args);
      console.log("Returning cached result", args, cacheKey);
      return cache[cacheKey]; //cache[cacheKey];
    } else {
      cache[cacheKey] = fn(...args);
      console.log("Calculating result", args, cache);
      return cache[cacheKey];
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(4, 3); // 5
memoizedFn(4, 3); // 5
console.log(callCount); // 1
