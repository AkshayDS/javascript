/**
 * Classic FizzBuzz Algorithm
 * Print numbers 1 to N.
 * - If divisible by 3, print "Fizz".
 * - If divisible by 5, print "Buzz".
 * - If divisible by both 3 and 5, print "FizzBuzz".
 * - Otherwise, print the number.
 */

// Basic Method using if/else logic
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log("--- Standard FizzBuzz ---");
// fizzBuzz(15); 


// Clean string concatenation method (better for scalability)
function fizzBuzzClean(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";

        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";

        // Output will be empty if not divisible by 3 or 5, so print 'i'
        console.log(output || i);
    }
}

console.log("\n--- Clean FizzBuzz ---");
fizzBuzzClean(20);
