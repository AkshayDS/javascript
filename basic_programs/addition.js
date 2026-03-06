/**
 * Simple script to add two numbers.
 */

function addNumbers(a, b) {
    return a + b;
}

const num1 = 15;
const num2 = 27;
const sum = addNumbers(num1, num2);

console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

// Arrow function version
const addArrow = (a, b) => a + b;
console.log(`Using arrow function, 10 + 20 = ${addArrow(10, 20)}`);
