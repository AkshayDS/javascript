/**
 * Finds the intersection of two arrays without using built-in set operations.
 * Returns an array of common elements.
 * Time Complexity: O(n * m) where n and m are the lengths of the arrays.
 * Space Complexity: O(min(n, m)) for the intersection array.
 */
function arrayIntersection(arr1, arr2) {
    const intersection = [];

    for (let i = 0; i < arr1.length; i++) {
        const item1 = arr1[i];
        let found = false;

        // Check if item1 is in arr2
        for (let j = 0; j < arr2.length; j++) {
            if (item1 === arr2[j]) {
                found = true;
                break;
            }
        }

        // Check if item1 is already in intersection to avoid duplicates
        if (found) {
            let alreadyAdded = false;
            for (let k = 0; k < intersection.length; k++) {
                if (item1 === intersection[k]) {
                    alreadyAdded = true;
                    break;
                }
            }

            if (!alreadyAdded) {
                intersection.push(item1);
            }
        }
    }

    return intersection;
}
