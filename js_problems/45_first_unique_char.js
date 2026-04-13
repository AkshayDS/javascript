// Problem: First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. 
// If it does not exist, return -1.
// Example 1: "leetcode" -> 0 (because 'l' is the first unique character)
// Example 2: "loveleetcode" -> 2 (because 'v' is the first unique character)
// Example 3: "aabb" -> -1

// Approach 1: Using Hash Map (O(N) Time, O(1) Space since max 26 characters)
function firstUniqChar(s) {
  const charFreq = new Map();

  // First pass: Count frequencies of each character
  for (const char of s) {
    charFreq.set(char, (charFreq.get(char) || 0) + 1);
  }

  // Second pass: Find the first character with a frequency of 1
  for (let i = 0; i < s.length; i++) {
    if (charFreq.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// Approach 2: Using Array instead of Map (Slightly faster due to less overhead)
function firstUniqCharArray(s) {
    // Array to store frequency of 26 lowercase English letters
    const count = new Array(26).fill(0);
    
    // First pass
    for (let i = 0; i < s.length; i++) {
        // 'a'.charCodeAt(0) is 97
        count[s.charCodeAt(i) - 97]++;
    }
    
    // Second pass
    for (let i = 0; i < s.length; i++) {
        if (count[s.charCodeAt(i) - 97] === 1) {
            return i;
        }
    }
    
    return -1;
}

// Approach 3: Using built-in string methods (More concise but could be O(N^2) internally depending on JS engine)
function firstUniqCharBuiltIn(s) {
    for (let i = 0; i < s.length; i++) {
        // If the first occurrence is also the last occurrence, it's unique
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}

// Test cases
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1

console.log("\nArray Frequency Approach:");
console.log(firstUniqCharArray("leetcode")); // 0
console.log(firstUniqCharArray("loveleetcode")); // 2

console.log("\nBuilt-In Methods Approach:");
console.log(firstUniqCharBuiltIn("leetcode")); // 0
console.log(firstUniqCharBuiltIn("loveleetcode")); // 2
