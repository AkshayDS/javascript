// Problem: Generate Fibonacci Sequence
// Fibonacci: each number is the sum of the two preceding ones
// Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// Find nth Fibonacci number
function nthFibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

// Test cases
console.log("First 10 Fibonacci numbers:", fibonacci(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("5th Fibonacci number:", nthFibonacci(5));   // 5
console.log("10th Fibonacci number:", nthFibonacci(10)); // 55
