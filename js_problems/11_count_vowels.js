// Problem: Count Vowels and Consonants in a String
// Given a string, count how many vowels and consonants it contains.

function countVowelsAndConsonants(str) {
  const vowels = "aeiou";
  let vowelCount = 0;
  let consonantCount = 0;

  for (const char of str.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

// Test cases
console.log(countVowelsAndConsonants("Hello World"));
// { vowels: 3, consonants: 7 }

console.log(countVowelsAndConsonants("JavaScript"));
// { vowels: 3, consonants: 7 }

console.log(countVowelsAndConsonants("aeiou"));
// { vowels: 5, consonants: 0 }

console.log(countVowelsAndConsonants("rhythm"));
// { vowels: 0, consonants: 6 }

console.log(countVowelsAndConsonants("Programming is fun!"));
// { vowels: 5, consonants: 11 }
