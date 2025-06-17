/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function() {
        return console.log("Hello World");
    }
};

const f = createHelloWorld();
 f(); // "Hello World"

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */