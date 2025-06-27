/**
 * @param {number} millis
 * @return {Promise}
 */
// async function sleep(millis) {

//     return new Promise((resolve) => {
//         setTimeout(resolve, millis);
//     })
//  }

 // await is used to pause the execution of an async function until the promise is resolved
 // sleep function returns a promise that resolves after the specified time in milliseconds
 // The `sleep` function can be used to delay the execution of code for a specified amount
 // of time, which can be useful in various scenarios such as waiting for an API response or
 async function sleep(millis) {

    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    })
 }





 
  let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100
 


  //     // async funtion returms a promise that resolves after a specified time

  //         async function hello() {
  //         return ("Hello, World!"); // returns a promise that resolves with the string "Hello, World!"
  //         }


  //         hello().then((message) => {
  //             console.log(message); // "Hello, World!"
  //         })

  //  //instead of this it can use await to get the result directly
  //   const hello  = await hello(); // this will wait for the promise to resolve and then assign the result to hello variable     

 




// //example of a promise that resolves after 1 second
// // This is a simple example of how to create a promise that resolves after a certain time.
//          const promise = new Promise(callback)

// // The callback function takes two parameters: resolve and reject.
// // resolve is called when the promise is fulfilled, and reject is called when the promise is rejected

// //then tkes a callback function that is called when the promise is resolved
//           promise.then(() => {
//               console.log("Promise resolved after 1 second");
//           });

//           promise.catch((error) => {
//               console.error("Promise rejected with error:", error);
//           } )
//           promise.finally (() => {
//               console.log("Promise has settled (either resolved or rejected)");
//           });

// //hoisting 
//       function callback(resolve, reject)  {
//       setTimeout (() => resolve(), 1000)
//       };

//       //genratlly we use try catch to handle errors in promises
//       function callback2(resolve, reject)  {
//           try {
//               setTimeout(() => resolve(), 1000);
//           } catch (error) {
//               reject(error);
//           }
//       };

//       //pending promise
//      function pendingPromise() {
//          return new Promise((resolve, reject) => {
//              // This promise will never resolve or reject
//              console.log("This promise is pending and will never resolve or reject.");
//          });
//      }


//======