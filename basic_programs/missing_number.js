/**
 * Finds the missing number in an array containing a sequence of integers from 1 to N.
 * The array contains N-1 numbers, meaning exactly one number is missing.
 * Uses the mathematical sum formula (Gauss's formula) to find the missing number.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findMissingNumber(arr) {
    // Since one number is missing, the actual N is array length + 1
    const n = arr.length + 1;
    
    // Calculate expected sum of 1 to N using Gauss's formula
    const expectedSum = (n * (n + 1)) / 2;
    
    // Calculate actual sum of elements in the array
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    
    // The difference is the missing number
    return expectedSum - actualSum;
}
