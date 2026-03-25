// Problem: Find the Factorial of a Number
// Factorial of n (n!) = n * (n-1) * (n-2) * ... * 1
// Example: 5! = 5 * 4 * 3 * 2 * 1 = 120

// Iterative approach
function factorialIterative(n) {
  if (n < 0) return "Factorial not defined for negative numbers";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive approach
function factorialRecursive(n) {
  if (n < 0) return "Factorial not defined for negative numbers";
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

// Test cases
console.log("Iterative:");
console.log(factorialIterative(5));   // 120
console.log(factorialIterative(0));   // 1
console.log(factorialIterative(10));  // 3628800

console.log("\nRecursive:");
console.log(factorialRecursive(5));   // 120
console.log(factorialRecursive(7));   // 5040
