// Problem: Rotate an Array by K Positions
// Given an array and a number k, rotate the array to the right by k steps.
// Example: [1,2,3,4,5], k=2 → [4,5,1,2,3]

// Using slice
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle k > array length
  if (k === 0) return [...arr];
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

// In-place reversal approach (O(1) extra space)
function rotateInPlace(arr, k) {
  const result = [...arr]; // copy to avoid mutating original
  const n = result.length;
  k = k % n;

  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(result, 0, n - 1);
  // Step 2: Reverse the first k elements
  reverse(result, 0, k - 1);
  // Step 3: Reverse the remaining elements
  reverse(result, k, n - 1);

  return result;
}

// Test cases
console.log(rotateArray([1, 2, 3, 4, 5], 2));     // [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));  // [4, 5, 6, 1, 2, 3]
console.log(rotateArray([1, 2, 3], 1));            // [3, 1, 2]
console.log(rotateArray([1, 2, 3], 6));            // [1, 2, 3] (k=6 same as k=0)

console.log("\nIn-place reversal approach:");
console.log(rotateInPlace([1, 2, 3, 4, 5], 2));   // [4, 5, 1, 2, 3]
console.log(rotateInPlace([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]
