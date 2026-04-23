// Problem: Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, 
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
// Example 1: nums = [2,3,1,1,4] -> true (Jump 1 step from index 0 to 1, then 3 steps to the last index.)
// Example 2: nums = [3,2,1,0,4] -> false (You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.)

// Approach: Greedy Algorithm
// We can iterate backwards from the last index and keep track of the "earliest" index 
// from which we can reach our current goal. Initially, the goal is the last index.
// Optimal: O(N) Time, O(1) Space.
function canJump(nums) {
  // Start the goal at the last index
  let goal = nums.length - 1;

  // Iterate backward from the second to last element down to 0
  for (let i = nums.length - 2; i >= 0; i--) {
    // If we are at index i, the maximum distance we can jump is nums[i]
    // Can we reach or pass the current goal from index i?
    if (i + nums[i] >= goal) {
      // Yes, so index i becomes our new goal! 
      // If we can reach i, we know we can reach the end.
      goal = i;
    }
  }

  // If the goal reaches the start (index 0), it means we can jump from start to finish
  return goal === 0;
}

// Alternative Approach: Greedy Forward
// Track the maximum reachable index at any given point
function canJumpForward(nums) {
    let maxReach = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // If the current index is beyond our max reach, we can't be here!
        if (i > maxReach) return false;
        
        // Update our max reach
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // If at any point our max reach is >= the last index, we can make it
        // (This is an early exit optimization)
        if (maxReach >= nums.length - 1) return true;
    }
    
    return true;
}

// Test cases
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0]));            // true (We start at the last index)
console.log(canJump([2, 0, 0]));      // true

console.log("\nGreedy Forward Approach:");
console.log(canJumpForward([2, 3, 1, 1, 4])); // true
console.log(canJumpForward([3, 2, 1, 0, 4])); // false
