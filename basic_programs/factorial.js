/**
 * Script to calculate the factorial of a number.
 * Note: Factorial of n (n!) = n * (n-1) * (n-2) * ... * 1
 */

// Iterative approach
function calculateFactorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers";

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log("Factorial of 5 (Iterative):", calculateFactorial(5));
console.log("Factorial of 0 (Iterative):", calculateFactorial(0));

// Recursive approach
function factorialRecursive(n) {
    if (n < 0) return "Factorial is not defined for negative numbers";
    if (n === 0 || n === 1) return 1;

    return n * factorialRecursive(n - 1);
}

console.log("Factorial of 6 (Recursive):", factorialRecursive(6));
