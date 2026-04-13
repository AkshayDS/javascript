// Problem: Happy Number
// Write an algorithm to determine if a number n is "happy".
// A happy number is a number defined by the following process:
// 1. Starting with any positive integer, replace the number by the sum of the squares of its digits.
// 2. Repeat the process until the number equals 1 (where it will stay), 
//    or it loops endlessly in a cycle which does not include 1.
// 3. Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
// Example: 19 -> true
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Helper function to calculate the sum of squares of digits
function getSumOfSquares(num) {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Approach 1: Using a Hash Set to detect cycles
function isHappySet(n) {
  const seen = new Set();
  
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getSumOfSquares(n);
  }
  
  return n === 1;
}

// Approach 2: Floyd's Cycle-Finding Algorithm (Tortoise and Hare)
// Optimal Space Complexity: O(1) space, since we don't need a Set.
function isHappyFastSlow(n) {
  let slow = n;
  let fast = getSumOfSquares(n);
  
  // Fast pointer moves two steps, slow pointer moves one step
  while (fast !== 1 && slow !== fast) {
    slow = getSumOfSquares(slow);
    fast = getSumOfSquares(getSumOfSquares(fast));
  }
  
  return fast === 1;
}

// Test cases
console.log(isHappySet(19)); // true
console.log(isHappySet(2)); // false (Loops endlessly)
console.log(isHappySet(7)); // true
console.log(isHappySet(1111111)); // true (Sum of squares -> 7 -> happy)

console.log("\nFast/Slow Pointer Approach:");
console.log(isHappyFastSlow(19)); // true
console.log(isHappyFastSlow(2)); // false
