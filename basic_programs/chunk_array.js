/**
 * Chunks an array into smaller arrays of a specified size.
 * Time Complexity: O(n), where n is the length of the array.
 * Space Complexity: O(n) for the output array.
 */
function chunkArray(arr, size) {
    if (size <= 0) return [];
    
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size));
    }
    
    return chunked;
}
