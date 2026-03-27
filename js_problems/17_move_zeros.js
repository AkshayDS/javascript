// Problem: Move All Zeros to the End of an Array
// Given an array, move all zeros to the end while maintaining the order of non-zero elements.

function moveZeros(arr) {
  const result = [...arr];
  let insertPos = 0;

  // Move all non-zero elements to the front
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== 0) {
      result[insertPos] = result[i];
      insertPos++;
    }
  }

  // Fill the rest with zeros
  while (insertPos < result.length) {
    result[insertPos] = 0;
    insertPos++;
  }

  return result;
}

// Test cases
console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

console.log(moveZeros([0, 0, 1]));
// [1, 0, 0]

console.log(moveZeros([1, 2, 3]));
// [1, 2, 3] — no zeros

console.log(moveZeros([0, 0, 0]));
// [0, 0, 0] — all zeros

console.log(moveZeros([4, 0, 5, 0, 0, 6, 7]));
// [4, 5, 6, 7, 0, 0, 0]
