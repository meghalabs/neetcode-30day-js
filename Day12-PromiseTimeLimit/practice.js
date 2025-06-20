/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {

      //by looking a line 8 async we get to know it going to return promise because every async function returns a promise 
        return new Promise(async(resolve, reject) => {

          // it will reject time call after t time but if it passes fn is a promise too as per line 31 promise 
          const id = setTimeout(() => reject("Time Limit Exceeded" ), t);
          try {
           const res = await fn(...args);
            return resolve(res)
          }
          catch (error) {
            console.log(error)
          }
          finally{
            clearTimeout(id)
          }
      
        })
    }
};


  const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
  limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
