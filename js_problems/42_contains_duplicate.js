// Problem: Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.
// Example 1: [1,2,3,1] -> true
// Example 2: [1,2,3,4] -> false
// Example 3: [1,1,1,3,3,4,3,2,4,2] -> true

// Approach 1: Using a Set (Optimal: O(N) Time, O(N) Space)
function containsDuplicate(nums) {
  const seen = new Set();
  
  for (const num of nums) {
    if (seen.has(num)) {
      return true; // Found a duplicate
    }
    seen.add(num);
  }
  
  return false; // No duplicates found
}

// Approach 2: Using Set Size Comparison (Shortest code)
function containsDuplicateShort(nums) {
  // A Set automatically removes duplicates. 
  // If the sizes differ, there were duplicates in the original array.
  return new Set(nums).size !== nums.length;
}

// Approach 3: Sorting (O(N log N) Time, O(1) or O(N) Space depending on sorting algorithm)
function containsDuplicateSort(nums) {
  // Sort the array first
  nums.sort((a, b) => a - b);
  
  // Check adjacent elements
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  
  return false;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); 
// true

console.log(containsDuplicate([1, 2, 3, 4])); 
// false

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 
// true

console.log(containsDuplicate([])); 
// false

console.log("\nSet Size Approach:");
console.log(containsDuplicateShort([1, 2, 3, 1])); // true
console.log(containsDuplicateShort([1, 2, 3, 4])); // false

console.log("\nSorting Approach:");
console.log(containsDuplicateSort([1, 2, 3, 1])); // true
console.log(containsDuplicateSort([1, 2, 3, 4])); // false
