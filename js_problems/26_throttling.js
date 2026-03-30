// Problem: Implement a Throttle Function
// Create a throttle function that ensures a given function is only called at most once
// within a specified time limit, no matter how many times it was invoked.

function throttle(func, limit) {
  let lastRan = 0;
  let timeoutId;

  return function (...args) {
    const context = this;
    const now = Date.now();

    // If it's been long enough since the last run
    if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
    } else {
      // Clear existing timeout to ensure the *latest* execution happens at the end
      // if the user is still triggering the event
      clearTimeout(timeoutId);

      // Schedule for the end of the limit period
      timeoutId = setTimeout(() => {
        // Only run if we actually waited long enough
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (now - lastRan));
    }
  };
}

// Basic Throttle (simpler, dropping intermediate calls without a trailing edge)
function basicThrottle(func, limit) {
  let waiting = false;
  return function (...args) {
    if (!waiting) {
      func.apply(this, args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// Test case simulation
console.log("Simulating scrolling with throttle...");

let scrollEvents = 0;
const handleScroll = (position) => {
  scrollEvents++;
  console.log(`[Scrolling] Position: ${position}px | Handler fired: ${scrollEvents} times`);
};

const throttledScroll = basicThrottle(handleScroll, 500);

// Simulate scrolling very fast
throttledScroll(100); // Fired immediately
throttledScroll(150); // Ignored
throttledScroll(200); // Ignored

setTimeout(() => throttledScroll(250), 200); // Ignored (still within 500ms limit)
setTimeout(() => throttledScroll(300), 550); // Fired (past 500ms limit)
setTimeout(() => throttledScroll(400), 700); // Ignored
setTimeout(() => throttledScroll(500), 1100); // Fired (past next 500ms window)

setTimeout(() => {
  console.log("\nFinished simulation. Total handler executions:", scrollEvents, "(expected 3)");
}, 1200);
