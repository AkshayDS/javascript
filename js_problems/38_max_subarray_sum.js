// Problem: Maximum Subarray Sum (Kadane's Algorithm)
// Given an integer array, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
// Example: [-2,1,-3,4,-1,2,1,-5,4] -> 6 (Subarray is [4,-1,2,1])

function maxSubArraySum(arr) {
  if (arr.length === 0) return 0;

  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Determine whether to add the current element to the existing contiguous subarray
    // or start a new subarray beginning at the current element.
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    
    // Update the maximum sum found so far
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Function that also returns the actual subarray
function maxSubArray(arr) {
    if (arr.length === 0) return { max: 0, array: [] };

    let currentSum = arr[0];
    let maxSum = arr[0];
    
    let currentStart = 0;
    let maxStart = 0;
    let maxEnd = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            currentStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxStart = currentStart;
            maxEnd = i;
        }
    }

    return { 
        max: maxSum, 
        array: arr.slice(maxStart, maxEnd + 1) 
    };
}

// Test cases
console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 
// 6 (from [4, -1, 2, 1])

console.log(maxSubArraySum([1])); 
// 1

console.log(maxSubArraySum([5, 4, -1, 7, 8])); 
// 23 (entire array sums to 23)

console.log(maxSubArraySum([-5, -2, -9, -1])); 
// -1 (smallest negative number when all are negative)

console.log("\nFull Subarray Info:");
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 
// { max: 6, array: [ 4, -1, 2, 1 ] }
