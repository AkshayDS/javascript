/**
 * Demonstrates conditional logic by checking if a given year is a leap year.
 * A year is a leap year if it is exactly divisible by 4,
 * except for end-of-century years which must be exactly divisible by 400.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function isLeapYear(year) {
    if (typeof year !== 'number' || !Number.isInteger(year)) {
        return false;
    }

    // A year is a leap year if:
    // 1. It is divisible by 4 AND NOT divisible by 100
    // OR
    // 2. It is divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    
    return false;
}
