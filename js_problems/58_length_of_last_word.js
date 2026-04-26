// Problem: Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Example 1: s = "Hello World" -> output: 5 ("World")
// Example 2: s = "   fly me   to   the moon  " -> output: 4 ("moon")
// Example 3: s = "luffy is still joyboy" -> output: 6 ("joyboy")

// Approach 1: Built-in String Methods (Trim and Split)
// Time Complexity: O(N), Space Complexity: O(N) due to array allocation
function lengthOfLastWord(s) {
  // 1. Trim removes whitespace from both ends
  // 2. Split splits the string by spaces into an array of words
  // 3. Filter removes any empty strings caused by consecutive spaces
  const words = s.trim().split(' ').filter(word => word.length > 0);
  
  if (words.length === 0) return 0;
  
  // Return the length of the last word in the array
  return words[words.length - 1].length;
}

// Approach 2: Optimal Backwards Iteration
// Time Complexity: O(N) where N is length of string
// Space Complexity: O(1) since we only use pointers, no new strings/arrays allocated
function lengthOfLastWordOptimal(s) {
    let length = 0;
    
    // Start from the end of the string
    for (let i = s.length - 1; i >= 0; i--) {
        // If we see a non-space character, we've found our word!
        if (s[i] !== ' ') {
            length++;
        } 
        // If we see a space AND we have already started counting a word,
        // it means we just finished traversing the last word. We can stop.
        else if (length > 0) {
            break;
        }
    }
    
    return length;
}

// Test cases
console.log("Built-in Approach:");
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6

console.log("\nOptimal O(1) Space Approach:");
console.log(lengthOfLastWordOptimal("Hello World")); // 5
console.log(lengthOfLastWordOptimal("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWordOptimal("luffy is still joyboy")); // 6
