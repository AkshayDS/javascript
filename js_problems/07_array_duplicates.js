// Problem: Remove Duplicates from an Array
// Given an array, return a new array with only unique elements.

// Using Set
function removeDuplicatesSet(arr) {
  return [...new Set(arr)];
}

// Using filter
function removeDuplicatesFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Using reduce
function removeDuplicatesReduce(arr) {
  return arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
}

// Test cases
const testArr = [1, 2, 3, 2, 4, 3, 5, 1, 6];

console.log("Original:", testArr);
console.log("Set method:", removeDuplicatesSet(testArr));
console.log("Filter method:", removeDuplicatesFilter(testArr));
console.log("Reduce method:", removeDuplicatesReduce(testArr));
// All output: [1, 2, 3, 4, 5, 6]

const strArr = ["apple", "banana", "apple", "cherry", "banana"];
console.log("\nString array:", removeDuplicatesSet(strArr));
// ["apple", "banana", "cherry"]
