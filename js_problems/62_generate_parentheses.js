// Problem: Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Example 1: n = 3 -> ["((()))","(()())","(())()","()(())","()()()"]
// Example 2: n = 1 -> ["()"]

// Approach: Backtracking (Recursive)
// We add '(' or ')' depending on the rules:
// 1. We can add '(' if we haven't used all 'n' of them.
// 2. We can add ')' if there are more '(' than ')' currently in our string.
// Time Complexity: O(4^n / sqrt(n)) - This is the nth Catalan number
// Space Complexity: O(n) for the recursion stack
function generateParenthesis(n) {
  const result = [];
  
  // Helper function to build strings recursively
  function backtrack(currentStr, openCount, closeCount) {
    // Base Case: If the current string length is 2*n, we've used all pairs
    if (currentStr.length === n * 2) {
      result.push(currentStr);
      return;
    }
    
    // If we can still add an open parenthesis, add it and recurse
    if (openCount < n) {
      backtrack(currentStr + '(', openCount + 1, closeCount);
    }
    
    // If we have more open parentheses than close ones, 
    // it's valid to add a close parenthesis to match
    if (closeCount < openCount) {
      backtrack(currentStr + ')', openCount, closeCount + 1);
    }
  }
  
  // Start the backtracking with an empty string and 0 counts
  backtrack("", 0, 0);
  
  return result;
}

// Approach 2: Closure/State-holding without passing strings around (More memory efficient for large strings)
function generateParenthesisOptimal(n) {
    const result = [];
    const current = new Array(2 * n);
    
    function generate(pos, openCount, closeCount) {
        if (pos === 2 * n) {
            result.push(current.join(''));
            return;
        }
        
        if (openCount < n) {
            current[pos] = '(';
            generate(pos + 1, openCount + 1, closeCount);
        }
        
        if (closeCount < openCount) {
            current[pos] = ')';
            generate(pos + 1, openCount, closeCount + 1);
        }
    }
    
    generate(0, 0, 0);
    return result;
}


// Test cases
console.log("n = 1:", generateParenthesis(1));
// [ '()' ]

console.log("n = 2:", generateParenthesis(2));
// [ '(())', '()()' ]

console.log("n = 3:");
console.log(generateParenthesis(3));
/*
[
  '((()))',
  '(()())',
  '(())()',
  '()(())',
  '()()()'
]
*/

console.log("\nOptimal Array Approach (n = 3):");
console.log(generateParenthesisOptimal(3));
