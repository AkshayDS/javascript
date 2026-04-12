// Problem: Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of the non-overlapping 
// intervals that cover all the intervals in the input.
// Example 1: [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]
// Example 2: [[1,4],[4,5]] -> [[1,5]]

function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  // Step 1: Sort the intervals by their starting values
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 2: Initialize result array with the first interval
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = merged[merged.length - 1];

    // If the current interval overlaps with the last merged one
    // Overlap condition: start of current <= end of last
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Merge them by updating the end of the last merged interval
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      // No overlap, so push the current interval to merged array
      merged.push(currentInterval);
    }
  }

  return merged;
}

// Test cases
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); 
// [[1, 6], [8, 10], [15, 18]]

console.log(mergeIntervals([[1, 4], [4, 5]])); 
// [[1, 5]]

console.log(mergeIntervals([[1, 4], [0, 4]])); 
// [[0, 4]]

console.log(mergeIntervals([[1, 4], [2, 3]])); 
// [[1, 4]] (One interval completely inside another)

console.log(mergeIntervals([])); 
// []

console.log(mergeIntervals([[1, 5]])); 
// [[1, 5]]
