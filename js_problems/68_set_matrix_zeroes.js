// Problem: Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, 
// set its entire row and column to 0's. You must do it in place.
// Example: [[1,1,1],[1,0,1],[1,1,1]] -> [[1,0,1],[0,0,0],[1,0,1]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // 1. Check if the first row has any zeros
  for (let c = 0; c < numCols; c++) {
    if (matrix[0][c] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // 2. Check if the first column has any zeros
  for (let r = 0; r < numRows; r++) {
    if (matrix[r][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // 3. Use the first row and column as markers for the rest of the matrix
  for (let r = 1; r < numRows; r++) {
    for (let c = 1; c < numCols; c++) {
      if (matrix[r][c] === 0) {
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }
    }
  }

  // 4. Set cells to zero based on markers in the first row and column
  for (let r = 1; r < numRows; r++) {
    for (let c = 1; c < numCols; c++) {
      if (matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  // 5. Finally, handle the first row and first column themselves
  if (firstRowHasZero) {
    for (let c = 0; c < numCols; c++) {
      matrix[0][c] = 0;
    }
  }

  if (firstColHasZero) {
    for (let r = 0; r < numRows; r++) {
      matrix[r][0] = 0;
    }
  }
}

// Test case
const matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
console.log("Original Matrix:", JSON.stringify(matrix1));
setZeroes(matrix1);
console.log("Updated Matrix:", JSON.stringify(matrix1)); 
// [[1,0,1],[0,0,0],[1,0,1]]

const matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];
setZeroes(matrix2);
console.log("Updated Matrix 2:", JSON.stringify(matrix2));
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
