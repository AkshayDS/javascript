// Problem: Merge Two Sorted Arrays
// Given two sorted arrays, merge them into a single sorted array without using sort().

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and push the smaller one
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Push remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // Push remaining elements from arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Test cases
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([], [1, 2, 3]));
// [1, 2, 3]

console.log(mergeSortedArrays([1, 1, 1], [1, 1, 1]));
// [1, 1, 1, 1, 1, 1]

console.log(mergeSortedArrays([-5, 0, 10], [-3, 7, 20]));
// [-5, -3, 0, 7, 10, 20]
