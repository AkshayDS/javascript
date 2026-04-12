// Problem: Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example: n = 2 -> 2 ways (1+1, 2)
// Example: n = 3 -> 3 ways (1+1+1, 1+2, 2+1)

// Approach 1: Dynamic Programming (Optimal - O(N) Time, O(1) Space)
// Notice how it's exactly like the Fibonacci sequence
function climbStairs(n) {
  if (n <= 2) return n;

  let first = 1;  // Ways to climb 1 step
  let second = 2; // Ways to climb 2 steps

  for (let i = 3; i <= n; i++) {
    // Current ways is the sum of ways to get to the step below (take 1 step) 
    // plus ways to get to 2 steps below (take 2 steps)
    const current = first + second;
    
    // Shift our window up by one step
    first = second;
    second = current;
  }

  return second;
}

// Approach 2: Using an Array for DP (O(N) Time, O(N) Space)
// This is easier to visualize if you're new to DP
function climbStairsArrayArray(n) {
  if (n <= 2) return n;
  
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

// Approach 3: Recursion with Memoization (O(N) Time, O(N) Space due to call stack)
function climbStairsMemo(n, memo = {}) {
  if (n <= 2) return n;
  
  // If we've already calculated the ways for this step, return it
  if (memo[n]) return memo[n];
  
  // Calculate and store
  memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
  
  return memo[n];
}

// Test cases
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5 (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)
console.log(climbStairs(5)); // 8
console.log(climbStairs(10)); // 89

console.log("\nDP Array Approach:");
console.log(climbStairsArrayArray(5)); // 8

console.log("\nMemoization Approach:");
console.log(climbStairsMemo(5)); // 8
