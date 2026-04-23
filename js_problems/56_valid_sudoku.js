// Problem: Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated 
// according to the following rules:
// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note: A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Empty cells are filled with the character '.'.

// Approach: Using a Hash Set
// Time Complexity: O(1) since the board is always 9x9 (81 iterations).
// Space Complexity: O(1) for the same reason.
function isValidSudoku(board) {
  const seen = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cellValue = board[i][j];

      // We only care about filled cells
      if (cellValue !== '.') {
        // Create unique string identifiers for rows, columns, and sub-boxes
        const rowStr = `${cellValue} in row ${i}`;
        const colStr = `${cellValue} in col ${j}`;
        
        // Calculate the sub-box index (0 to 8)
        // Math.floor(i/3) + "-" + Math.floor(j/3) gives a unique coordinate for each 3x3 box
        const boxIndex = `${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
        const boxStr = `${cellValue} in box ${boxIndex}`;

        // If the Set already has any of these strings, we found a duplicate!
        if (seen.has(rowStr) || seen.has(colStr) || seen.has(boxStr)) {
          return false;
        }

        // Add the unique strings to our Set
        seen.add(rowStr);
        seen.add(colStr);
        seen.add(boxStr);
      }
    }
  }

  // If we checked all filled cells without returning false, the board is valid
  return true;
}

// Alternative Approach: Array of Sets
function isValidSudokuArrays(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val === '.') continue;
            
            // Calculate 1D index for the 3x3 box
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            
            if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }
            
            rows[i].add(val);
            cols[j].add(val);
            boxes[boxIndex].add(val);
        }
    }
    
    return true;
}

// Test case
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(board)); // true
console.log(isValidSudokuArrays(board)); // true

// Make it invalid by duplicating '5' in the top-left 3x3 box
const invalidBoard = structuredClone(board); // Creating deep copy
invalidBoard[0][2] = "5"; 
console.log(isValidSudoku(invalidBoard)); // false
