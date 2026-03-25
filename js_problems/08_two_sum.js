// Problem: Two Sum
// Given an array of numbers and a target, find two numbers that add up to the target.
// Return their indices.

function twoSum(nums, target) {
  const map = new Map(); // stores number -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return []; // no solution found
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));   // [0, 1] → 2 + 7 = 9
console.log(twoSum([3, 2, 4], 6));        // [1, 2] → 2 + 4 = 6
console.log(twoSum([1, 5, 3, 8], 11));    // [1, 3] → 5 + 8 = 13? No → Actually [2, 3] → 3+8=11
console.log(twoSum([1, 2, 3, 4, 5], 9));  // [3, 4] → 4 + 5 = 9
