// Problem: Flatten a Nested Array
// Given a deeply nested array, return a single flat array with all values.

// Recursive approach
function flattenArray(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Using reduce
function flattenWithReduce(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenWithReduce(item) : item);
  }, []);
}

// Test cases
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
// [1, 2, 3, 4, 5, 6]

console.log(flattenArray([[1, 2], [3, [4, [5]]]]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([1, 2, 3]));
// [1, 2, 3] — already flat

console.log("\nUsing reduce:");
console.log(flattenWithReduce([1, [2, [3, [4, [5]]]]]));
// [1, 2, 3, 4, 5]
