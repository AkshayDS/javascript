// Problem: Coin Change
// You are given an integer array coins representing coins of different denominations 
// and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
// Example 1: coins = [1,2,5], amount = 11 -> output 3 (11 = 5 + 5 + 1)
// Example 2: coins = [2], amount = 3 -> output -1
// Example 3: coins = [1], amount = 0 -> output 0

// Approach: Dynamic Programming (Bottom-Up)
// Time Complexity: O(amount * N) where N is the number of coins
// Space Complexity: O(amount)
function coinChange(coins, amount) {
  // Create an array to store the minimum number of coins needed for each amount from 0 to 'amount'
  // Initialize with a value strictly greater than the possible maximum coins (amount + 1)
  const dp = new Array(amount + 1).fill(amount + 1);
  
  // Base case: 0 coins are needed to make amount 0
  dp[0] = 0;
  
  // Iterate through all amounts from 1 to 'amount'
  for (let i = 1; i <= amount; i++) {
    // For each amount, try all possible coins
    for (const coin of coins) {
      // If the coin is less than or equal to the current amount we are trying to make
      if (coin <= i) {
        // The minimum coins needed for amount 'i' is the minimum between:
        // 1. The currently recorded minimum for 'i' (dp[i])
        // 2. The minimum coins needed for the amount (i - coin) PLUS 1 (for the current coin)
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  
  // If dp[amount] is still greater than amount, it means we couldn't make the amount
  return dp[amount] > amount ? -1 : dp[amount];
}

// Approach 2: Recursion with Memoization (Top-Down)
// Time and Space Complexity are similar, but can run into call stack size limits for huge amounts
function coinChangeMemo(coins, amount, memo = {}) {
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    if (memo[amount] !== undefined) return memo[amount];
    
    let minCoins = Infinity;
    
    for (const coin of coins) {
        const result = coinChangeMemo(coins, amount - coin, memo);
        
        // If a valid combination was found, update the minimum
        if (result >= 0 && result < minCoins) {
            minCoins = 1 + result;
        }
    }
    
    // Store in memo map before returning
    memo[amount] = minCoins === Infinity ? -1 : minCoins;
    return memo[amount];
}

// Test cases
console.log("DP Bottom-Up Approach:");
console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3));        // -1
console.log(coinChange([1], 0));        // 0
console.log(coinChange([186, 419, 83, 408], 6249)); // 20

console.log("\nDP Top-Down (Memoization) Approach:");
console.log(coinChangeMemo([1, 2, 5], 11)); // 3
console.log(coinChangeMemo([2], 3));        // -1
