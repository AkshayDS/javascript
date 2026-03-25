// Problem: Title Case a Sentence
// Convert the first letter of each word to uppercase and the rest to lowercase.

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Test cases
console.log(titleCase("hello world"));
// "Hello World"

console.log(titleCase("javascript is awesome"));
// "Javascript Is Awesome"

console.log(titleCase("THE QUICK BROWN FOX"));
// "The Quick Brown Fox"

console.log(titleCase("i love coding"));
// "I Love Coding"

console.log(titleCase("a"));
// "A"
