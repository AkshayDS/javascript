// Problem: Number of Islands
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
// return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

// Approach: Depth-First Search (DFS)
// Time Complexity: O(M * N) where M is number of rows, N is number of columns
// Space Complexity: O(M * N) in worst case for the recursion call stack (if grid is filled with lands)
function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  
  let islandCount = 0;
  const numRows = grid.length;
  const numCols = grid[0].length;
  
  // Helper function to perform DFS traversal
  function dfs(row, col) {
    // Base Case: check bounds and if current cell is water ('0')
    if (
      row < 0 || col < 0 || 
      row >= numRows || col >= numCols || 
      grid[row][col] === '0'
    ) {
      return;
    }
    
    // Mark the current cell as visited by turning it into water ('0')
    grid[row][col] = '0';
    
    // Recursively visit all 4 adjacent directions (up, down, left, right)
    dfs(row - 1, col); // Up
    dfs(row + 1, col); // Down
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  }
  
  // Iterate through every cell in the grid
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      // If we find unvisited land ('1')
      if (grid[r][c] === '1') {
        // We found a new island!
        islandCount++;
        // Use DFS to sink (mark as '0') the entire island so we don't count it again
        dfs(r, c);
      }
    }
  }
  
  return islandCount;
}

// Test cases
// Notice these modify the arrays in place since objects are passed by reference in JS!
// In a real scenario, you might want to deep clone the grid if you need to preserve original data.
const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
console.log(numIslands(grid1)); // 1

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log(numIslands(grid2)); // 3

const emptyGrid = [];
console.log(numIslands(emptyGrid)); // 0
