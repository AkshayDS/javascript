/**
 * Moves all zeros in an array to the end while maintaining the relative order of non-zero elements.
 * Modifies the array in-place.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function moveZeros(arr) {
    let nonZeroIndex = 0; // Pointer for the position of the next non-zero element

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is not zero
        if (arr[i] !== 0) {
            // Swap it with the element at nonZeroIndex
            // This pulls all non-zero elements to the front
            let temp = arr[nonZeroIndex];
            arr[nonZeroIndex] = arr[i];
            arr[i] = temp;
            
            nonZeroIndex++;
        }
    }

    // Since we're swapping, the zeros automatically get pushed to the end.
    // If we wanted to avoid unnecessary swaps of non-zeros with themselves,
    // we could add `if (i !== nonZeroIndex)` before swapping.
}
