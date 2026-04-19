// Problem: Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
// A string is palindromic if it reads the same forward and backward.
// Example 1: "babad" -> "bab" (or "aba")
// Example 2: "cbbd" -> "bb"
// Example 3: "a" -> "a"

// Approach: Expand Around Center (Optimal: O(N^2) Time, O(1) Space)
// We treat every character (and every space between characters) as a potential center 
// of a palindrome and expand outward as long as the characters match.
function longestPalindrome(s) {
  if (!s || s.length < 1) return "";

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    // There are two types of centers:
    // 1. A single character (e.g., "aba" center is 'b')
    const len1 = expandAroundCenter(s, i, i);
    // 2. The space between two characters (e.g., "abba" center is between 'b' and 'b')
    const len2 = expandAroundCenter(s, i, i + 1);

    // Get the maximum length found from this center
    const len = Math.max(len1, len2);

    // If we found a palindrome longer than our current best, update the boundaries
    if (len > end - start) {
      // Calculate the start and end indices based on the center and length
      // For len=3, center=1 ('b' in 'aba'): start = 1 - (3-1)/2 = 0, end = 1 + 3/2 = 2
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  // Return the longest palindromic substring
  return s.substring(start, end + 1);
}

// Helper function to expand outward and return the length of the palindrome
function expandAroundCenter(s, left, right) {
  let L = left;
  let R = right;
  
  // Keep expanding as long as boundaries are valid and characters match
  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--;
    R++;
  }
  
  // Return the length of the palindrome
  // (R - L - 1) because the while loop breaks when s[L] !== s[R] (so L and R are one step too far)
  return R - L - 1;
}

// Test cases
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
console.log(longestPalindrome("a"));     // "a"
console.log(longestPalindrome("ac"));    // "a" (or "c")
console.log(longestPalindrome("racecar")); // "racecar"
console.log(longestPalindrome("abbcccbbbcaaccbababcbcabca")); // "bbcccbb"
