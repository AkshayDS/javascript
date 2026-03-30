// Problem: Deep Clone an Object
// Create a completely independent copy of an object, including all nested objects and arrays.

// Basic approach using JSON parsing (has limitations: loses undefined, functions, dates, etc.)
function simpleDeepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Robust recursive approach
function deepClone(item) {
  // Handle null and non-objects (primitives)
  if (item === null || typeof item !== "object") {
    return item;
  }

  // Handle Dates
  if (item instanceof Date) {
    return new Date(item.valueOf());
  }

  // Handle Arrays
  if (Array.isArray(item)) {
    const copy = [];
    for (let i = 0; i < item.length; i++) {
      copy[i] = deepClone(item[i]);
    }
    return copy;
  }

  // Handle Objects
  if (item instanceof Object) {
    const copy = {};
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        copy[key] = deepClone(item[key]);
      }
    }
    return copy;
  }

  throw new Error("Unable to copy object!");
}

// Test cases
const original = {
  a: 1,
  b: { c: 2, d: [3, 4] },
  e: new Date("2025-01-01"),
};

const cloned = deepClone(original);

// Modifying the clone should not affect the original
cloned.a = 99;
cloned.b.c = 100;
cloned.b.d.push(5);

console.log("Original:");
console.dir(original, { depth: null });
// Expected: { a: 1, b: { c: 2, d: [3, 4] }, e: 2025-01-01T00:00:00.000Z }

console.log("\nCloned and modified:");
console.dir(cloned, { depth: null });
// Expected: { a: 99, b: { c: 100, d: [3, 4, 5] }, e: 2025-01-01T00:00:00.000Z }
