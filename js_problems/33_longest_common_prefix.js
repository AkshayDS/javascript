// Problem: Longest Common Prefix
// Given an array of strings, find the longest common prefix shared by all strings.
// Example: ["flower", "flow", "flight"] → "fl"

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  // Start with the first string as the prefix
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // Keep trimming the prefix until it matches the start of strs[i]
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

// Character-by-character approach
function longestCommonPrefixAlt(strs) {
  if (strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // ""
console.log(longestCommonPrefix(["inter", "interview", "internet"])); // "inter"
console.log(longestCommonPrefix(["abc"]));            // "abc"
console.log(longestCommonPrefix([]));                 // ""
console.log(longestCommonPrefix(["", "abc"]));        // ""

console.log("\nCharacter-by-character approach:");
console.log(longestCommonPrefixAlt(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefixAlt(["test", "testing", "tested"])); // "test"
