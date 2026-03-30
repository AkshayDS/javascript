// Problem: Find the Missing Number
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
// find the one that is missing from the array.

function findMissingNumber(arr) {
  const n = arr.length;
  // Expected sum of numbers from 0 to n
  const expectedSum = (n * (n + 1)) / 2;
  
  // Actual sum of numbers in the array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
  // The missing number is the difference
  return expectedSum - actualSum;
}

// Using XOR approach (prevents integer overflow for very large n)
function findMissingNumberXOR(arr) {
  let xorAll = 0;
  let xorArr = 0;
  
  // XOR all numbers from 0 to n
  for (let i = 0; i <= arr.length; i++) {
    xorAll ^= i;
  }
  
  // XOR all numbers in the array
  for (let i = 0; i < arr.length; i++) {
    xorArr ^= arr[i];
  }
  
  return xorAll ^ xorArr;
}

// Test cases
console.log(findMissingNumber([3, 0, 1])); // 2
console.log(findMissingNumber([0, 1]));    // 2 (n=2, missing 2)
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

console.log("\nXOR Method:");
console.log(findMissingNumberXOR([3, 1, 0])); // 2
console.log(findMissingNumberXOR([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
