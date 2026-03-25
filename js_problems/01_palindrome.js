// Problem: Check if a string is a Palindrome
// A palindrome reads the same forwards and backwards (e.g., "madam", "racecar")

function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Reverse the cleaned string and compare
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

// Test cases
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("12321"));     // true
