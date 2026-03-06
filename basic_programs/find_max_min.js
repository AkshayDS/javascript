/**
 * Script to find the maximum and minimum numbers in an array.
 */

const numbers = [45, 12, 78, 4, 99, 23, 11, 88, 5];

console.log(`Array of numbers: [${numbers.join(', ')}]`);

// Method 1: Using Math.max and Math.min with the spread operator (...)
const maxSpread = Math.max(...numbers);
const minSpread = Math.min(...numbers);

console.log(`\nMethod 1 (Spread Operator)`);
console.log(`Max: ${maxSpread}, Min: ${minSpread}`);

// Method 2: Using a standard for loop
let maxLoop = numbers[0];
let minLoop = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxLoop) {
        maxLoop = numbers[i];
    }
    if (numbers[i] < minLoop) {
        minLoop = numbers[i];
    }
}

console.log(`\nMethod 2 (For Loop)`);
console.log(`Max: ${maxLoop}, Min: ${minLoop}`);

// Method 3: Using Array.reduce
const maxReduce = numbers.reduce((a, b) => Math.max(a, b), -Infinity);
const minReduce = numbers.reduce((a, b) => Math.min(a, b), Infinity);

console.log(`\nMethod 3 (Reduce)`);
console.log(`Max: ${maxReduce}, Min: ${minReduce}`);
