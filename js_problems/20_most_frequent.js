// Problem: Find the Most Frequent Element in an Array
// Given an array, find the element that appears the most number of times.

function mostFrequent(arr) {
  const frequency = {};
  let maxCount = 0;
  let maxElement = null;

  for (const item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      maxElement = item;
    }
  }

  return { element: maxElement, count: maxCount };
}

// Test cases
console.log(mostFrequent([1, 3, 2, 1, 4, 1, 3]));
// { element: 1, count: 3 }

console.log(mostFrequent(["apple", "banana", "apple", "cherry", "apple"]));
// { element: "apple", count: 3 }

console.log(mostFrequent([7, 7, 7, 7]));
// { element: 7, count: 4 }

console.log(mostFrequent([5, 3, 5, 3, 1]));
// { element: 5, count: 2 }

console.log(mostFrequent([10]));
// { element: 10, count: 1 }
