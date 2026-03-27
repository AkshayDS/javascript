// Problem: Check if a Number is an Armstrong Number
// An Armstrong number (narcissistic number) is a number where the sum of its
// digits each raised to the power of the number of digits equals the number itself.
// Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

function isArmstrong(num) {
  const digits = num.toString().split("");
  const power = digits.length;

  const sum = digits.reduce((total, digit) => {
    return total + Math.pow(Number(digit), power);
  }, 0);

  return sum === num;
}

// Find all Armstrong numbers in a range
function armstrongInRange(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (isArmstrong(i)) result.push(i);
  }
  return result;
}

// Test cases
console.log(isArmstrong(153));   // true  (1³+5³+3³ = 153)
console.log(isArmstrong(370));   // true  (3³+7³+0³ = 370)
console.log(isArmstrong(9474));  // true  (9⁴+4⁴+7⁴+4⁴ = 9474)
console.log(isArmstrong(123));   // false
console.log(isArmstrong(1));     // true

console.log("\nArmstrong numbers from 1 to 1000:");
console.log(armstrongInRange(1, 1000));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]
