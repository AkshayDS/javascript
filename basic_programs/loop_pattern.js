/**
 * Demonstrates nested loops by generating a classic right-angled number triangle pattern.
 * Example for n = 5:
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) beyond the output string.
 */
function printNumberTriangle(n) {
    if (n <= 0) return;
    
    for (let i = 1; i <= n; i++) {
        let row = "";
        // Inner loop runs 'i' times for each row
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        // Print the assembled row string, trimmed of trailing spaces
        console.log(row.trim());
    }
}
