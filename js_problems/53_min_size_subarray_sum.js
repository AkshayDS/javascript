// Problem: Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, 
// return the minimal length of a contiguous subarray of which the sum is 
// greater than or equal to target. If there is no such subarray, return 0 instead.
// Example 1: target = 7, nums = [2,3,1,2,4,3] -> output 2 (The subarray [4,3] has minimal length)
// Example 2: target = 4, nums = [1,4,4] -> output 1
// Example 3: target = 11, nums = [1,1,1,1,1,1,1,1] -> output 0

// Approach: Sliding Window (Two Pointers)
// Optimal Solution. Time Complexity: O(N), Space Complexity: O(1)
function minSubArrayLen(target, nums) {
  let minLength = Infinity; // Start with infinity so any valid length will be smaller
  let windowSum = 0;
  let left = 0;

  // Iterate over the array with the 'right' pointer expanding our window
  for (let right = 0; right < nums.length; right++) {
    // Add the current number to our running window sum
    windowSum += nums[right];

    // While our window meets the condition, try to shrink it from the left
    // to find the MINIMAL length possible
    while (windowSum >= target) {
      // Update minimal length observed so far
      minLength = Math.min(minLength, right - left + 1);

      // Shrink the window: subtract the left-most element and move the left pointer up
      windowSum -= nums[left];
      left++;
    }
  }

  // If minLength is still Infinity, we never found a valid subarray
  return minLength === Infinity ? 0 : minLength;
}

// Approach 2: Brute Force (Time: O(N^2), Space: O(1)) - For Reference
function minSubArrayLenBrute(target, nums) {
    let minLength = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            if (currentSum >= target) {
                minLength = Math.min(minLength, j - i + 1);
                break; // Found the smallest for this starting index, can break inner loop
            }
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
}

// Test cases
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2 (subarray: [4, 3])
console.log(minSubArrayLen(4, [1, 4, 4]));          // 1 (subarray: [4])
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0 (sum is only 8)
console.log(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8])); // 2 (10+7 or 7+9 or 9+8)

console.log("\nBrute Force Approach:");
console.log(minSubArrayLenBrute(7, [2, 3, 1, 2, 4, 3])); // 2
