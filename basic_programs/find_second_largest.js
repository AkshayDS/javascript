/**
 * Finds the second largest number in an array without using built-in sort functions.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}
