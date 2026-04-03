// Problem: Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
// Example: "abcabcbb" -> 3 ("abc")
// Example: "bbbbb" -> 1 ("b")
// Example: "pwwkew" -> 3 ("wke")

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map(); // Stores the last seen index of a character

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If we have seen the character and it's within the current window
    if (charMap.has(char) && charMap.get(char) >= start) {
      // Move the start window to the right of the previous occurrence
      start = charMap.get(char) + 1;
    }

    // Update the last seen index of the character
    charMap.set(char, end);

    // Calculate current window length and update max
    const currentLength = end - start + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // 0
console.log(lengthOfLongestSubstring("au"));       // 2 ("au")
console.log(lengthOfLongestSubstring("aab"));      // 2 ("ab")
console.log(lengthOfLongestSubstring("dvdf"));     // 3 ("vdf")
