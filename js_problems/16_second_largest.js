// Problem: Find the Second Largest Number in an Array
// Given an array, find the second largest element without sorting.

function secondLargest(arr) {
  if (arr.length < 2) return null;

  let first = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// Test cases
console.log(secondLargest([10, 20, 5, 30, 15])); // 20
console.log(secondLargest([1, 2, 3, 4, 5]));     // 4
console.log(secondLargest([100, 50, 75, 90]));    // 90
console.log(secondLargest([5, 5, 5]));            // null (no distinct second)
console.log(secondLargest([7]));                  // null (not enough elements)
console.log(secondLargest([-3, -1, -7, -2]));     // -2
