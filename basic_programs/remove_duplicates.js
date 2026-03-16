/**
 * Removes duplicate elements from an array while preserving their original order.
 * Uses a Set to track seen elements for O(1) lookups.
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the Set and output array.
 */
function removeDuplicates(arr) {
    const seen = new Set();
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    return result;
}

/**
 * Removes duplicates from a sorted array in-place.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function removeDuplicatesSortedInPlace(arr) {
    if (arr.length === 0) return 0;
    
    let k = 1; // Pointers for unique elements
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[k] = arr[i];
            k++;
        }
    }
    
    return k; // Returns the new length of the array
}
