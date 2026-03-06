/**
 * Script to generate the Fibonacci sequence.
 * In a Fibonacci sequence, each number is the sum of the two preceding ones.
 * Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
 */

// Generate sequence using a simple loop
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

const numTerms = 10;
console.log(`First ${numTerms} terms of Fibonacci sequence:`, generateFibonacci(numTerms));

// Get the Nth Fibonacci number using recursion
function getFibonacciNth(n) {
    if (n <= 1) return n;
    return getFibonacciNth(n - 1) + getFibonacciNth(n - 2);
}

const targetN = 7;
console.log(`The ${targetN}th Fibonacci number is:`, getFibonacciNth(targetN));
