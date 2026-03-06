/**
 * Script to check if two strings are anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
 * Example: "listen" and "silent"
 */

// Method 1: Using built-in sorting (Easy to read, but O(n log n) time complexity)
function isAnagramSort(str1, str2) {
    // Helper function to clean and sort strings
    const cleanString = (str) =>
        str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

    return cleanString(str1) === cleanString(str2);
}

// Method 2: Using a Character Map (Frequency Counter) (More efficient, O(n) time complexity)
function isAnagramCharMap(str1, str2) {
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const charMap = {};

    // Build the character map for the first string
    for (let char of cleanStr1) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // Compare and decrement down from the second string
    for (let char of cleanStr2) {
        if (!charMap[char]) {
            return false; // Character not found or count went below 0
        }
        charMap[char]--;
    }

    return true;
}

// Tests
const testCases = [
    { s1: "listen", s2: "silent" },
    { s1: "rail safety", s2: "fairy tales" },
    { s1: "hello", s2: "billion" },
    { s1: "Dormitory", s2: "Dirty room" }
];

console.log("--- Testing Anagrams ---");
testCases.forEach(({ s1, s2 }) => {
    const sortResult = isAnagramSort(s1, s2);
    const mapResult = isAnagramCharMap(s1, s2);

    console.log(`"${s1}" & "${s2}":`);
    console.log(`  Sort Method: ${sortResult ? '✅ True' : '❌ False'}`);
    console.log(`  Map Method:  ${mapResult ? '✅ True' : '❌ False'}\n`);
});
