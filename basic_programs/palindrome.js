/**
 * Script to check if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 */

function isPalindrome(str) {
    // 1. Remove non-alphanumeric characters and convert to lower case
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // 2. Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');

    // 3. Compare original (cleaned) with reversed
    return cleanStr === reversedStr;
}

// Test cases
const testStrings = [
    "racecar",
    "hello",
    "A man, a plan, a canal: Panama",
    "Madam, I'm Adam",
    "JavaScript"
];

for (const test of testStrings) {
    const result = isPalindrome(test);
    console.log(`"${test}" is a palindrome? ${result ? "✅ Yes" : "❌ No"}`);
}

// Alternative approach without built-in methods (using a loop)
function isPalindromeManual(str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log("\nUsing manual loop method:");
console.log(`"racecar" is a palindrome? ${isPalindromeManual("racecar")}`);
