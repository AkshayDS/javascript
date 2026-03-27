// Problem: Reverse an Integer
// Given an integer, reverse its digits. Handle negative numbers too.
// Example: 123 → 321, -456 → -654

function reverseInteger(num) {
  const sign = num < 0 ? -1 : 1;
  const reversed = parseInt(
    Math.abs(num).toString().split("").reverse().join("")
  );
  return sign * reversed;
}

// Test cases
console.log(reverseInteger(123));     // 321
console.log(reverseInteger(-456));    // -654
console.log(reverseInteger(1000));    // 1
console.log(reverseInteger(0));       // 0
console.log(reverseInteger(9));       // 9
console.log(reverseInteger(-120));    // -21
