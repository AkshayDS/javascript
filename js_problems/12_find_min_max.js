// Problem: Find the Largest and Smallest Number in an Array
// Given an array of numbers, find the maximum and minimum values without using Math.max/min.

function findMinMax(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { min, max };
}

// Test cases
console.log(findMinMax([3, 1, 7, 2, 9, 4]));
// { min: 1, max: 9 }

console.log(findMinMax([100, -5, 42, 0, 88]));
// { min: -5, max: 100 }

console.log(findMinMax([5]));
// { min: 5, max: 5 }

console.log(findMinMax([-10, -20, -3, -15]));
// { min: -20, max: -3 }
