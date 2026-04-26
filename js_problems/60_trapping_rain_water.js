// Problem: Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
// Example: height = [0,1,0,2,1,0,1,3,2,1,2,1] -> Output: 6

// Approach 1: Two Pointers (Optimal)
// Time Complexity: O(N)
// Space Complexity: O(1)
function trap(height) {
  if (!height || height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  
  let leftMax = 0;
  let rightMax = 0;
  
  let totalWater = 0;

  // We move the pointers inward until they meet
  while (left < right) {
    // We determine the limiting height. Water can only be trapped up to the 
    // smaller of the maximum heights on the left and right sides.
    if (height[left] < height[right]) {
      // If current height is greater than leftMax, update leftMax
      // Otherwise, we can trap water: leftMax - current height
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      // Similar logic for the right side
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }

  return totalWater;
}

// Approach 2: Dynamic Programming (Pre-computing max heights)
// Time Complexity: O(N)
// Space Complexity: O(N)
function trapDP(height) {
    if (!height || height.length === 0) return 0;
    
    const n = height.length;
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
    
    // Fill leftMax array
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    
    // Fill rightMax array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    // Calculate total water
    let totalWater = 0;
    for (let i = 0; i < n; i++) {
        // Water trapped at index i is min(leftMax, rightMax) - height[i]
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return totalWater;
}

// Test cases
console.log("Two Pointers Approach:");
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5]));                   // 9
console.log(trap([1]));                                  // 0 (Need at least 3 bars to trap water)
console.log(trap([2, 0, 2]));                            // 2

console.log("\nDynamic Programming Approach:");
console.log(trapDP([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trapDP([4, 2, 0, 3, 2, 5]));                   // 9
