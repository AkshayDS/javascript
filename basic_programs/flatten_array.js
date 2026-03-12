/**
 * Flattens a nested array into a single-level array using recursion.
 * Time Complexity: O(n), where n is the total number of elements in all levels.
 * Space Complexity: O(n) for the result array and recursion stack.
 */
function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}
