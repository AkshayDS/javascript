/**
 * Script to reverse a string.
 */

// Method 1: Using built-in array methods
function reverseWithMethods(str) {
    return str.split('').reverse().join('');
}

// Method 2: Using a descending for loop
function reverseWithLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Method 3: Using recursion
function reverseWithRecursion(str) {
    if (str === "") {
        return "";
    } else {
        return reverseWithRecursion(str.substr(1)) + str.charAt(0);
    }
}

const originalString = "Hello, JavaScript!";

console.log(`Original String: "${originalString}"`);
console.log(`Reversed (Methods): "${reverseWithMethods(originalString)}"`);
console.log(`Reversed (Loop): "${reverseWithLoop(originalString)}"`);
console.log(`Reversed (Recursion): "${reverseWithRecursion(originalString)}"`);
