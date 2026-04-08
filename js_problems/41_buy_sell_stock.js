// Problem: Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the i-th day.
// You want to maximize your profit by choosing a single day to buy one stock 
// and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. 
// If you cannot achieve any profit, return 0.
// Example: [7,1,5,3,6,4] -> 5 (Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5)

function maxProfit(prices) {
  if (prices.length < 2) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // Determine the minimum price seen so far
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      // If we didn't update the min price, check if selling today yields a better profit
      const currentProfit = prices[i] - minPrice;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }

  return maxProfit;
}

// O(N^2) naive approach for comparison
function maxProfitNaive(prices) {
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            if (profit > max) {
                max = profit;
            }
        }
    }
    return max;
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
// 5 (Buy at 1, sell at 6)

console.log(maxProfit([7, 6, 4, 3, 1])); 
// 0 (No profit can be made, prices always dropping)

console.log(maxProfit([1, 2, 3, 4, 5])); 
// 4 (Buy at 1, sell at 5)

console.log(maxProfit([2, 4, 1])); 
// 2 (Buy at 2, sell at 4)

console.log(maxProfit([3, 2, 6, 5, 0, 3])); 
// 4 (Buy at 2, sell at 6)

console.log("\nNaive Approach:");
console.log(maxProfitNaive([7, 1, 5, 3, 6, 4])); // 5
