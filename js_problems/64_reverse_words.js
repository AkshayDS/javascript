// Problem: Reverse Words in a String
// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be 
// separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note: s may contain leading or trailing spaces or multiple spaces between two words. 
// The returned string should only have a single space separating the words. Do not include any extra spaces.

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  // 1. Trim leading/trailing whitespace
  // 2. Split by one or more spaces (regex \s+)
  // 3. Reverse the array of words
  // 4. Join with a single space
  return s.trim().split(/\s+/).reverse().join(' ');
}

// Manual approach (O(1) extra space excluding output)
function reverseWordsManual(s) {
    const result = [];
    let word = '';
    
    // Iterate backwards
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            word = s[i] + word;
        } else if (word.length > 0) {
            result.push(word);
            word = '';
        }
    }
    
    // Catch the last word if it exists
    if (word.length > 0) result.push(word);
    
    return result.join(' ');
}

// Test cases
console.log(reverseWords("the sky is blue"));         // "blue is sky the"
console.log(reverseWords("  hello world  "));         // "world hello"
console.log(reverseWords("a good   example"));       // "example good a"

console.log("\nManual Approach:");
console.log(reverseWordsManual("  hello world  "));   // "world hello"
