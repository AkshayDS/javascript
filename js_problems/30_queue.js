// Problem: Implement a Queue using an Array
// A queue follows FIFO (First In, First Out) principle.
// Operations: enqueue, dequeue, front, isEmpty, size

class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // Return the front element without removing it
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements
  size() {
    return this.items.length;
  }

  // Display the queue
  print() {
    console.log("Queue:", this.items.join(" -> "));
  }
}

// Test cases
const queue = new Queue();

queue.enqueue("Alice");
queue.enqueue("Bob");
queue.enqueue("Charlie");
queue.print();                       // Queue: Alice -> Bob -> Charlie

console.log("Front:", queue.front());       // Alice
console.log("Dequeue:", queue.dequeue());   // Alice
console.log("Dequeue:", queue.dequeue());   // Bob
queue.print();                       // Queue: Charlie

console.log("Size:", queue.size());         // 1
console.log("Empty?", queue.isEmpty());     // false

queue.dequeue();
console.log("Empty?", queue.isEmpty());     // true
console.log("Dequeue empty:", queue.dequeue()); // Queue is empty
