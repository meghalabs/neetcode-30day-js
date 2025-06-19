/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    return function(...args){
        called = true;
        if (called) {
            console.log("Function has already been called");
            return undefined;
        } else {
            console.log("Calling function for the first time");
            called = true;
            return fn(...args);
        }

        // Alternative implementation
        // if (called) {
        //     return undefined;
        // } else {
        //     called = true;
        //     return fn.apply(this, args);  
        // }    
    }
};


  let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
 
  console.log(onceFn(1,2,3)); // 6
  console.log(onceFn(2,3,6)); // returns undefined without calling fn
 


  // 
  const persone = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };

  function callGreet(greetting) {
    console.log(`${greetting} ${this.name}`);
  } 

  // Using call, apply, and bind
  // different ways to call the function with the context of `persone`

  callGreet.call(persone, "Hi"); // Hi John
  callGreet.apply(persone, ["Hello"]); // Hello John
  const boundGreet = callGreet.bind(persone, "Hey");
  boundGreet(); // Hey John