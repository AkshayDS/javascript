// Problem: Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown
// pivot index k (1 <= k < nums.length).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, 
// return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.
// 
// Example 1: nums = [4,5,6,7,0,1,2], target = 0 -> output: 4
// Example 2: nums = [4,5,6,7,0,1,2], target = 3 -> output: -1
// Example 3: nums = [1], target = 0 -> output: -1

function searchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Find the middle index
    const mid = Math.floor((left + right) / 2);

    // If we found the target, return the index
    if (nums[mid] === target) {
      return mid;
    }

    // Determine which half is properly sorted
    
    // Left half is sorted: [left ... mid]
    if (nums[left] <= nums[mid]) {
      // Check if target is within the sorted left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // It's in the left half, so shrink right boundary
      } else {
        left = mid + 1; // It's in the right half, so shrink left boundary
      }
    } 
    // Right half is sorted: [mid ... right]
    else {
      // Check if target is within the sorted right half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // It's in the right half, so shrink left boundary
      } else {
        right = mid - 1; // It's in the left half, so shrink right boundary
      }
    }
  }

  // Target not found
  return -1;
}

// Test cases
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(searchRotated([1], 0));                   // -1
console.log(searchRotated([1, 3], 3));                // 1
console.log(searchRotated([5, 1, 3], 3));             // 2
console.log(searchRotated([6, 7, 8, 1, 2, 3, 4], 8)); // 2
