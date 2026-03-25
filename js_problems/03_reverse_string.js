// Problem: Reverse a String
// Write a function to reverse a given string without using the built-in reverse() method.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Alternative approach using recursion
function reverseStringRecursive(str) {
  if (str === "") return "";
  return reverseStringRecursive(str.substring(1)) + str[0];
}

// Test cases
console.log(reverseString("hello"));        // "olleh"
console.log(reverseString("JavaScript"));   // "tpircSavaJ"
console.log(reverseString("12345"));        // "54321"

console.log("\nRecursive approach:");
console.log(reverseStringRecursive("hello"));      // "olleh"
console.log(reverseStringRecursive("JavaScript")); // "tpircSavaJ"
