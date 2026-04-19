// Problem: Subsets (Power Set)
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// Example 1: nums = [1,2,3] -> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2: nums = [0] -> [[],[0]]

// Approach 1: Backtracking (Recursive)
// Optimal for generating combinations. Time: O(N * 2^N), Space: O(N) for recursion stack.
function subsetsBacktracking(nums) {
  const result = [];
  
  // Helper function for backtracking
  function backtrack(startIndex, currentSubset) {
    // We add a copy of the current subset to result because arrays are passed by reference
    result.push([...currentSubset]);
    
    // Iterate through the remaining choice of numbers
    for (let i = startIndex; i < nums.length; i++) {
      // 1. Choose a number
      currentSubset.push(nums[i]);
      
      // 2. Explore further (recursively build subsets with this number included)
      backtrack(i + 1, currentSubset);
      
      // 3. Un-choose (backtrack) to explore subsets without this number
      currentSubset.pop();
    }
  }
  
  backtrack(0, []);
  return result;
}

// Approach 2: Cascading / Iterative
// Start with empty subset. For each number, add it to all existing subsets to form new ones.
// Time: O(N * 2^N), Space: O(N * 2^N) to store outputs.
function subsetsIterative(nums) {
    let result = [[]]; // Start with the empty subset
    
    for (const num of nums) {
        const newSubsets = [];
        // Loop over currently generated subsets
        for (const curr of result) {
            // Create a new subset by adding the current number
            newSubsets.push([...curr, num]);
        }
        // Add all newly created subsets to the final result list
        result = [...result, ...newSubsets];
    }
    
    return result;
}

// Test cases
console.log("Backtracking Approach:");
console.log(subsetsBacktracking([1, 2, 3]));
/*
[
  [],       [ 1 ],
  [ 1, 2 ], [ 1, 2, 3 ],
  [ 1, 3 ], [ 2 ],
  [ 2, 3 ], [ 3 ]
]
*/

console.log(subsetsBacktracking([0])); // [ [], [ 0 ] ]

console.log("\nIterative Approach:");
console.log(subsetsIterative([1, 2, 3]));
/*
[
  [],       [ 1 ],
  [ 2 ],    [ 1, 2 ],
  [ 3 ],    [ 1, 3 ],
  [ 2, 3 ], [ 1, 2, 3 ]
]
*/
