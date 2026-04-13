// Problem: Container With Most Water
// You are given an integer array height of length n. 
// There are n vertical lines drawn such that the two endpoints 
// of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, 
// such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.
// Example: [1,8,6,2,5,4,8,3,7] -> 49 (max height is bounded by 7, width is 8-1=7, 7*7=49)

// Approach 1: Two Pointers (Optimal: O(N) Time, O(1) Space)
function maxArea(height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // The amount of water is limited by the shorter line
    const currentHeight = Math.min(height[left], height[right]);
    const currentWidth = right - left;
    const currentWater = currentHeight * currentWidth;
    
    // Update maximum water capacity found so far
    maxWater = Math.max(maxWater, currentWater);

    // Move the pointer that points to the shorter line inward,
    // in hopes of finding a taller line that might hold more water.
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Approach 2: Brute Force (O(N^2) Time, O(1) Space) - For comparison only
function maxAreaBruteForce(height) {
    let max = 0;
    
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
             // Area = width * Math.min(height1, height2)
             const area = (j - i) * Math.min(height[i], height[j]);
             max = Math.max(max, area);
        }
    }
    
    return max;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); 
// 49

console.log(maxArea([1, 1])); 
// 1

console.log(maxArea([4, 3, 2, 1, 4])); 
// 16

console.log(maxArea([1, 2, 1])); 
// 2

console.log("\nBrute Force Approach:");
console.log(maxAreaBruteForce([1, 8, 6, 2, 5, 4, 8, 3, 7])); 
// 49
