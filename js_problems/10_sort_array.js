// Problem: Implement Bubble Sort
// Repeatedly swap adjacent elements if they are in the wrong order.

function bubbleSort(arr) {
  const sorted = [...arr]; // don't mutate original
  const n = sorted.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        // Swap using destructuring
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
        swapped = true;
      }
    }
    // If no swaps happened, array is already sorted
    if (!swapped) break;
  }

  return sorted;
}

// Test cases
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]

console.log(bubbleSort([5, 1, 4, 2, 8]));
// [1, 2, 4, 5, 8]

console.log(bubbleSort([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5] — already sorted, exits early
