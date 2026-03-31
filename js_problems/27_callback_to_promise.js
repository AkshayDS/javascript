// Problem: Implement a Simple Promise (Callback to Promise Conversion)
// Convert a callback-based function into a Promise-based one.
// Also implement basic promise chaining.

// Simulating an async operation with callbacks
function fetchUserCallback(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error("Invalid user ID"), null);
    } else {
      callback(null, { id, name: "User_" + id, role: "developer" });
    }
  }, 500);
}

// Convert the callback function to return a Promise
function fetchUserPromise(id) {
  return new Promise((resolve, reject) => {
    fetchUserCallback(id, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Test cases using Promise
console.log("Fetching user with Promise...");

fetchUserPromise(1)
  .then((user) => {
    console.log("Success:", user);
    // Chain another promise
    return fetchUserPromise(2);
  })
  .then((user) => {
    console.log("Chained Success:", user);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

// Test error case
fetchUserPromise(-1)
  .then((user) => console.log("Should not reach here:", user))
  .catch((error) => console.log("Caught Error:", error.message));

// Using async/await
async function getUsers() {
  try {
    const user1 = await fetchUserPromise(3);
    console.log("\nAsync/Await - User 1:", user1);

    const user2 = await fetchUserPromise(4);
    console.log("Async/Await - User 2:", user2);
  } catch (error) {
    console.log("Async/Await Error:", error.message);
  }
}

getUsers();
