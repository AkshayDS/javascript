// Problem: Find the Intersection of Two Arrays
// Given two arrays, return a new array containing the elements that are present in both arrays.
// The result should only contain unique elements.

// Approach 1: Using Set and filter
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  
  // Filter elements from set1 that are also in set2
  const intersection = [...set1].filter(item => set2.has(item));
  
  return intersection;
}

// Approach 2: Using HashMap (useful if we wanted to track frequencies or return duplicate intersections)
function arrayIntersectionMap(arr1, arr2) {
  const map = new Map();
  const result = [];
  
  // Count occurrences in first array
  for (const item of arr1) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  
  // Check against second array
  for (const item of arr2) {
    if (map.has(item) && map.get(item) > 0) {
      result.push(item);
      // Decrement or delete to avoid duplicate inclusion if we wanted unique
      // For unique intersection, we can just delete it from the map after finding it once
      map.delete(item); 
    }
  }
  
  return result;
}

// Test cases
console.log(arrayIntersection([1, 2, 2, 1], [2, 2])); 
// [2]

console.log(arrayIntersection([4, 9, 5], [9, 4, 9, 8, 4])); 
// [4, 9] or [9, 4]

console.log(arrayIntersection([1, 2, 3], [4, 5, 6])); 
// []

console.log("\nMap Approach:");
console.log(arrayIntersectionMap([4, 9, 5], [9, 4, 9, 8, 4])); 
// [9, 4]
