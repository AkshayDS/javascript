// Problem: Sum of Digits of a Number
// Given a number, find the sum of all its digits.
// Example: 1234 → 1 + 2 + 3 + 4 = 10

// Iterative approach
function sumOfDigits(num) {
  let sum = 0;
  num = Math.abs(num); // handle negative numbers
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Using string conversion
function sumOfDigitsString(num) {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

// Recursive approach
function sumOfDigitsRecursive(num) {
  num = Math.abs(num);
  if (num < 10) return num;
  return (num % 10) + sumOfDigitsRecursive(Math.floor(num / 10));
}

// Test cases
console.log(sumOfDigits(1234));    // 10
console.log(sumOfDigits(9999));    // 36
console.log(sumOfDigits(-567));    // 18
console.log(sumOfDigits(0));       // 0

console.log("\nString method:");
console.log(sumOfDigitsString(4567));  // 22

console.log("\nRecursive method:");
console.log(sumOfDigitsRecursive(12345)); // 15
