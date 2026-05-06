// Problem: Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
// horizontally or vertically neighboring. The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function backtrack(r, c, index) {
    // Base Case: All characters in the word have been found
    if (index === word.length) return true;

    // Boundary and validity checks
    if (
      r < 0 || c < 0 || 
      r >= rows || c >= cols || 
      board[r][c] !== word[index]
    ) {
      return false;
    }

    // Mark current cell as visited using a placeholder
    const temp = board[r][c];
    board[r][c] = '#';

    // Explore adjacent cells (Up, Down, Left, Right)
    const found = 
      backtrack(r + 1, c, index + 1) ||
      backtrack(r - 1, c, index + 1) ||
      backtrack(r, c + 1, index + 1) ||
      backtrack(r, c - 1, index + 1);

    // Backtrack: Restore the original value of the cell
    board[r][c] = temp;

    return found;
  }

  // Check every cell as a starting point
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, 0)) return true;
    }
  }

  return false;
}

// Test cases
const board1 = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
console.log(exist(board1, "ABCCED")); // true
console.log(exist(board1, "SEE"));    // true
console.log(exist(board1, "ABCB"));   // false
