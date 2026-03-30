// Problem: Implement a Debounce Function
// Create a debounce function that limits the rate at which a function can fire.
// A debounced function will only execute after a specified delay has passed since the last time it was invoked.

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    // Clear the previous timer if it exists
    clearTimeout(timeoutId);

    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Test case simulation
console.log("Simulating rapid typing with debounce...");

let fetchCallCount = 0;
const expensiveFetchData = (query) => {
  fetchCallCount++;
  console.log(`[Fetching data...] query: "${query}" | API calls: ${fetchCallCount}`);
};

const debouncedFetch = debounce(expensiveFetchData, 300);

// Simulating typing "javascript" rapidly
debouncedFetch("j");
debouncedFetch("ja");
debouncedFetch("jav");
debouncedFetch("java");
debouncedFetch("javas");

setTimeout(() => {
  debouncedFetch("javascr");
}, 100);

setTimeout(() => {
  debouncedFetch("javascript");
}, 200);

// Only one API call should occur (with query "javascript") after 500ms (200ms + 300ms delay)
setTimeout(() => {
  console.log("\nFinished simulation. Total API calls:", fetchCallCount);
}, 600);
