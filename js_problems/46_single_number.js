// Problem: Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. 
// Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1: [2,2,1] -> 1
// Example 2: [4,1,2,1,2] -> 4
// Example 3: [1] -> 1

// Approach 1: Bit Manipulation (Optimal: O(N) Time, O(1) Space)
// Uses XOR (^). If we take XOR of zero and some bit, it will return that bit: a ^ 0 = a
// If we take XOR of two same bits, it will return 0: a ^ a = 0
// Therefore, a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b.
function singleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]; // XOR operation
  }
  return result;
}

// Approach 2: Using Hash Set (O(N) Time, O(N) Space)
// Slower and uses more memory due to set overhead
function singleNumberSet(nums) {
  const seen = new Set();
  
  for (const num of nums) {
    if (seen.has(num)) {
      seen.delete(num); // If we've seen it, remove it
    } else {
      seen.add(num); // If we haven't seen it, add it
    }
  }
  
  // The only remaining element in the set is the single number
  return Array.from(seen)[0];
}

// Approach 3: Using mathematical trick with Sets
// 2 * (a + b + c) - (a + a + b + b + c) = c
function singleNumberMath(nums) {
    const uniqueSum = Array.from(new Set(nums)).reduce((acc, curr) => acc + curr, 0);
    const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    
    return (2 * uniqueSum) - totalSum;
}

// Test cases
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1

console.log("\nSet Approach:");
console.log(singleNumberSet([4, 1, 2, 1, 2])); // 4

console.log("\nMath Approach:");
console.log(singleNumberMath([4, 1, 2, 1, 2])); // 4
