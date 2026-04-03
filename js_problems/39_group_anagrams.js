// Problem: Group Anagrams
// Given an array of strings, group the anagrams together.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
// Example: ["eat","tea","tan","ate","nat","bat"] 
// Result: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) {
  const anagramGroups = new Map();

  for (const str of strs) {
    // Sort the string to create a "signature" for anagrams
    // Example: "eat" -> "a,e,t", "tea" -> "a,e,t"
    const sortedStr = str.split('').sort().join('');

    // If the signature is not in the map, add it with an empty array
    if (!anagramGroups.has(sortedStr)) {
      anagramGroups.set(sortedStr, []);
    }

    // Push the original string into the appropriate group
    anagramGroups.get(sortedStr).push(str);
  }

  // Convert the map values to an array of arrays
  return Array.from(anagramGroups.values());
}

// Alternative approach using character counting (more efficient for very long strings)
// O(N * K) time where N is number of strings and K is max string length
function groupAnagramsOptimized(strs) {
    const map = new Map();
    
    for (const str of strs) {
        // Create an array of 26 zeros representing char frequency 
        const count = new Array(26).fill(0);
        
        for (let i = 0; i < str.length; i++) {
            // Get character code distance from 'a' (0 for 'a', 1 for 'b', etc.)
            count[str.charCodeAt(i) - 97]++;
        }
        
        // Use the frequency array as a string key
        const key = count.join('#');
        
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    
    return Array.from(map.values());
}

// Test cases
const test1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Sorting approach:");
console.log(groupAnagrams(test1));

console.log("\nOptimized approach:");
console.log(groupAnagramsOptimized(test1));

const test2 = [""];
console.log(groupAnagrams(test2));

const test3 = ["a"];
console.log(groupAnagrams(test3));
