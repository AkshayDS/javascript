// Problem: Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.
// Example 1: nums = [1,1,1,2,2,3], k = 2 -> output: [1,2]
// Example 2: nums = [1], k = 1 -> output: [1]

// Approach 1: Hash Map and Sorting
// Time Complexity: O(N log N) dominated by sorting the unique elements
// Space Complexity: O(N) for storing frequencies in a Map
function topKFrequent(nums, k) {
  const freqMap = new Map();

  // 1. Count frequencies of every element
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // 2. Convert map into Array so it can be sorted
  // [...freqMap.entries()] turns Map { 1 => 3, 2 => 2, 3 => 1 } 
  // into [ [1, 3], [2, 2], [3, 1] ]
  const freqArray = [...freqMap.entries()];

  // 3. Sort array in descending order based on frequency (second element of pair)
  freqArray.sort((a, b) => b[1] - a[1]);

  // 4. Extract the top K elements
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(freqArray[i][0]);
  }

  return result;
}

// Approach 2: Bucket Sort
// Time Complexity: O(N) because counting and distributing elements takes linear time
// Space Complexity: O(N) for map and buckets array
function topKFrequentBucket(nums, k) {
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Create an array of arrays (buckets)
    // Index = frequency, Value = array of numbers with that frequency
    // Max frequency possible is nums.length
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    
    // Distribute map entries into buckets
    for (const [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);
    }
    
    const result = [];
    
    // Iterate from the highest frequency bucket down to 0
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            // Add elements from this bucket
            result.push(...buckets[i]);
            // If we grabbed too many (in case multiple numbers share the same frequency),
            // slice the array to only return exactly K items
            if (result.length > k) {
                return result.slice(0, k);
            }
        }
    }
    
    return result;
}

// Test cases
console.log("Sort Approach:");
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1));                // [1]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // [-1, 2]

console.log("\nBucket Sort Approach:");
console.log(topKFrequentBucket([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequentBucket([1], 1));                // [1]
console.log(topKFrequentBucket([4, 1, -1, 2, -1, 2, 3], 2)); // [-1, 2]
