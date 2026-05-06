// Problem: Combination Sum
// Given an array of distinct integers candidates and a target integer target, 
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times. 
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// Example: candidates = [2,3,6,7], target = 7 -> output: [[2,2,3],[7]]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];
  
  // Sorting is not strictly required for logic but helps with optimizations 
  // (like breaking early if a candidate exceeds remaining target)
  candidates.sort((a, b) => a - b);

  /**
   * @param {number} remaining - current target we are trying to reach
   * @param {number[]} currentCombo - the combination built so far
   * @param {number} start - the index in candidates to start exploring from (to avoid duplicates)
   */
  function backtrack(remaining, currentCombo, start) {
    // Base Case: We reached the target exactly
    if (remaining === 0) {
      result.push([...currentCombo]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // Optimization: if current candidate is larger than remaining, no point in checking it or any later ones
      if (candidates[i] > remaining) break;

      // 1. Choose the candidate
      currentCombo.push(candidates[i]);

      // 2. Explore further (notice we pass 'i' as start index because we can reuse the same number)
      backtrack(remaining - candidates[i], currentCombo, i);

      // 3. Un-choose (Backtrack)
      currentCombo.pop();
    }
  }

  backtrack(target, [], 0);
  return result;
}

// Test cases
console.log(combinationSum([2, 3, 6, 7], 7)); 
// [[2, 2, 3], [7]]

console.log(combinationSum([2, 3, 5], 8));    
// [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

console.log(combinationSum([2], 1));          
// []
