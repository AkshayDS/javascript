// Problem: FizzBuzz
// Print numbers 1 to n. For multiples of 3 print "Fizz",
// for multiples of 5 print "Buzz", for multiples of both print "FizzBuzz".

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

// Test
console.log("FizzBuzz from 1 to 20:");
fizzBuzz(20);
