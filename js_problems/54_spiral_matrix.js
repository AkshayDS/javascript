// Problem: Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.
// Example:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

function spiralOrder(matrix) {
  const result = [];
  
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }
  
  // Initialize boundaries
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    
    // 1. Traverse from Left to Right along the top boundary
    for (let c = left; c <= right; c++) {
      result.push(matrix[top][c]);
    }
    top++; // top boundary moves down
    
    // 2. Traverse from Top to Bottom along the right boundary
    for (let r = top; r <= bottom; r++) {
      result.push(matrix[r][right]);
    }
    right--; // right boundary moves left
    
    // Make sure we are now on a different row/col to prevent duplicates
    if (top <= bottom && left <= right) {
      
      // 3. Traverse from Right to Left along the bottom boundary
      for (let c = right; c >= left; c--) {
        result.push(matrix[bottom][c]);
      }
      bottom--; // bottom boundary moves up
      
      // 4. Traverse from Bottom to Top along the left boundary
      for (let r = bottom; r >= top; r--) {
        result.push(matrix[r][left]);
      }
      left++; // left boundary moves right
    }
  }
  
  return result;
}

// Test cases
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(spiralOrder(matrix1));
// Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
console.log(spiralOrder(matrix2));
// Expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

const emptyMatrix = [];
console.log(spiralOrder(emptyMatrix)); // []

const singleColumn = [[1], [2], [3]];
console.log(spiralOrder(singleColumn)); // [1, 2, 3]

const singleRow = [[1, 2, 3]];
console.log(spiralOrder(singleRow)); // [1, 2, 3]
