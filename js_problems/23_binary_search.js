// Problem: Implement Binary Search
// Given a sorted array, find the index of a target element. Return -1 if not found.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Find the middle element, prevent potential integer overflow for very large arrays
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); // 3
console.log(binarySearch([10, 20, 30, 40, 50], 30));       // 2
console.log(binarySearch([10, 20, 30, 40, 50], 60));       // -1
console.log(binarySearch([-5, 0, 5, 10, 15], 0));          // 1
