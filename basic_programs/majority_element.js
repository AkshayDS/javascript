/**
 * Finds the majority element in an array (an element that appears more than n/2 times).
 * Implements the highly efficient Boyer-Moore Voting Algorithm.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    // First pass: Find a candidate for the majority element
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Optional second pass: Verify that the candidate is actually the majority element
    // This is required if it is not guaranteed that a majority element always exists.
    let verifyCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate) {
            verifyCount++;
        }
    }

    if (verifyCount > Math.floor(nums.length / 2)) {
        return candidate;
    }

    return null; // Return null if no majority element exists
}
