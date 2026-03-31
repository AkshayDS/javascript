// Problem: Find the Majority Element in an Array
// The majority element appears more than n/2 times in the array.
// Use Boyer-Moore Voting Algorithm for O(n) time and O(1) space.

// Boyer-Moore Voting Algorithm
function majorityElement(arr) {
  let candidate = null;
  let count = 0;

  // Phase 1: Find a candidate
  for (const num of arr) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Phase 2: Verify the candidate actually appears more than n/2 times
  count = 0;
  for (const num of arr) {
    if (num === candidate) count++;
  }

  return count > arr.length / 2 ? candidate : "No majority element";
}

// Brute force approach using a frequency map
function majorityElementMap(arr) {
  const freq = {};
  const threshold = arr.length / 2;

  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > threshold) return num;
  }

  return "No majority element";
}

// Test cases
console.log(majorityElement([3, 3, 4, 2, 3, 3, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([1, 1, 1]));              // 1
console.log(majorityElement([1, 2, 3]));              // No majority element

console.log("\nMap approach:");
console.log(majorityElementMap([3, 3, 4, 2, 3, 3, 3])); // 3
console.log(majorityElementMap([1, 2, 3, 4]));           // No majority element
