// Problem: Check if Brackets are Balanced
// Given a string with brackets (), {}, [], check if all brackets are properly opened and closed.

function isBalanced(str) {
  const stack = [];
  const pairs = { "(": ")", "{": "}", "[": "]" };

  for (const char of str) {
    if (pairs[char]) {
      // It's an opening bracket — push to stack
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      // It's a closing bracket — check if it matches the last opening
      const last = stack.pop();
      if (pairs[last] !== char) return false;
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isBalanced("()"       ));  // true
console.log(isBalanced("()[]{}"   ));  // true
console.log(isBalanced("{[()]}"   ));  // true
console.log(isBalanced("(]"       ));  // false
console.log(isBalanced("([)]"     ));  // false
console.log(isBalanced("{[]}"     ));  // true
console.log(isBalanced("((("      ));  // false
console.log(isBalanced("hello(world)")); // true
