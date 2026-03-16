/**
 * Reverses an array in-place using a two-pointer approach.
 * Modifies the original array without using built-in reverse methods.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements at left and right pointers
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move pointers towards the middle
        left++;
        right--;
    }
}
