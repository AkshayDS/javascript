// Problem: Maximum Product Subarray
// Given an integer array nums, find a contiguous non-empty subarray within the array 
// that has the largest product, and return the product.

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  if (nums.length === 0) return 0;

  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let result = maxSoFar;

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    
    // If current is negative, max becomes min and min becomes max when multiplied
    if (curr < 0) {
      [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
    }

    // At each step, max product is either the current number itself 
    // or current number * previous max/min
    maxSoFar = Math.max(curr, maxSoFar * curr);
    minSoFar = Math.min(curr, minSoFar * curr);

    result = Math.max(result, maxSoFar);
  }

  return result;
}

// Test cases
console.log(maxProduct([2, 3, -2, 4]));       // 6
console.log(maxProduct([-2, 0, -1]));        // 0
console.log(maxProduct([-2, 3, -4]));       // 24
console.log(maxProduct([0, 2]));            // 2
console.log(maxProduct([-4, -3, -2]));     // 12
