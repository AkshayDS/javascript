// Problem: Implement a Stack using an Array
// A stack follows LIFO (Last In, First Out) principle.
// Operations: push, pop, peek, isEmpty, size

class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements
  size() {
    return this.items.length;
  }

  // Display the stack
  print() {
    console.log("Stack:", this.items.join(" <- "));
  }
}

// Test cases
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();            // Stack: 10 <- 20 <- 30

console.log("Peek:", stack.peek());     // 30
console.log("Pop:", stack.pop());       // 30
console.log("Pop:", stack.pop());       // 20
stack.print();            // Stack: 10

console.log("Size:", stack.size());     // 1
console.log("Empty?", stack.isEmpty()); // false

stack.pop();
console.log("Empty?", stack.isEmpty()); // true
console.log("Pop empty:", stack.pop()); // Stack is empty
