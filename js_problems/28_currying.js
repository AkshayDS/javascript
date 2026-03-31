// Problem: Implement Currying
// Currying transforms a function with multiple arguments into a sequence of
// functions each taking a single argument. f(a, b, c) → f(a)(b)(c)

// Basic curry for a fixed number of arguments
function curry(func) {
  return function curried(...args) {
    // If enough arguments have been provided, call the original function
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    // Otherwise, return a function that waits for the remaining arguments
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

// Example functions to curry
function add(a, b, c) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

// Test cases
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(4)(5));   // 20
console.log(curriedMultiply(4, 5));   // 20

// Practical use: creating reusable utility functions
const double = curriedMultiply(2);
const triple = curriedMultiply(3);

console.log("\nReusable curried functions:");
console.log("Double 7:", double(7));   // 14
console.log("Triple 7:", triple(7));   // 21
