// Problem: 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1: nums = [-1,0,1,2,-1,-4] -> [[-1,-1,2],[-1,0,1]]
// Example 2: nums = [0,1,1] -> []
// Example 3: nums = [0,0,0] -> [[0,0,0]]

// Approach: Sorting + Two Pointers
// Time Complexity: O(N^2), Space Complexity: O(1) or O(N) depending on sorting algorithm
function threeSum(nums) {
  const result = [];
  
  // Step 1: Sort the array (Crucial for two-pointer approach and duplicate handling)
  nums.sort((a, b) => a - b);
  
  // Step 2: Iterate through the array
  for (let i = 0; i < nums.length - 2; i++) {
    // If the current number is greater than zero, we can stop.
    // Since the array is sorted, all subsequent numbers are also > 0.
    // Three positive numbers can never sum to zero.
    if (nums[i] > 0) break;
    
    // Skip duplicate elements to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    // Set up two pointers
    let left = i + 1;
    let right = nums.length - 1;
    
    // Step 3: Two-pointer search for the remaining two numbers
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        // Found a valid triplet!
        result.push([nums[i], nums[left], nums[right]]);
        
        // Skip duplicate elements for the left pointer
        while (left < right && nums[left] === nums[left + 1]) left++;
        
        // Skip duplicate elements for the right pointer
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        // Move both pointers inward after finding a match
        left++;
        right--;
      } 
      else if (sum < 0) {
        // Sum is too small, we need a larger number, so move left pointer right
        left++;
      } 
      else {
        // Sum is too large, we need a smaller number, so move right pointer left
        right--;
      }
    }
  }
  
  return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
// [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 1, 1])); 
// []

console.log(threeSum([0, 0, 0])); 
// [[0, 0, 0]]

console.log(threeSum([-2, 0, 0, 2, 2])); 
// [[-2, 0, 2]]

console.log(threeSum([-2, 0, 1, 1, 2])); 
// [[-2, 0, 2], [-2, 1, 1]]
