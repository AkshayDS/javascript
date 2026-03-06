/**
 * Script to sort arrays using built-in methods and custom logic.
 */

// Sorting an array of numbers
const numbers = [42, 10, 5, 8, 100, 23, 1];

// Default sort (sorts alphabetically, so 100 comes before 23)
console.log("Default String Sort:", [...numbers].sort());

// Correct numeric sort (Ascending)
const ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending Numeric Sort:", ascending);

// Correct numeric sort (Descending)
const descending = [...numbers].sort((a, b) => b - a);
console.log("Descending Numeric Sort:", descending);

// Sorting an array of objects
const users = [
    { name: "Charlie", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 }
];

// Sort users by age
users.sort((a, b) => a.age - b.age);
console.log("\nUsers sorted by age:", users);

// Sort users by name alphabetically
users.sort((a, b) => a.name.localeCompare(b.name));
console.log("Users sorted by name:", users);
