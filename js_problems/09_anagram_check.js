// Problem: Check if Two Strings are Anagrams
// An anagram uses the same characters in a different order (e.g., "listen" & "silent")

function isAnagram(str1, str2) {
  // Clean and normalize both strings
  const clean = (s) => s.toLowerCase().replace(/\s/g, "");
  const a = clean(str1);
  const b = clean(str2);

  if (a.length !== b.length) return false;

  // Count character frequency
  const charCount = {};

  for (const char of a) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of b) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

// Test cases
console.log(isAnagram("listen", "silent"));     // true
console.log(isAnagram("hello", "world"));       // false
console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("abc", "abcd"));          // false
console.log(isAnagram("Triangle", "Integral")); // true
