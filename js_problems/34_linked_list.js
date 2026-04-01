// Problem: Implement Linked List
// A singly linked list where each node points to the next node.
// Operations: append, prepend, delete, find, print

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Add a node at the beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Delete first occurrence of a value
  delete(value) {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Find a node by value
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  // Reverse the linked list
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // Display the list
  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> ") + " -> null");
  }
}

// Test cases
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print();                        // 5 -> 10 -> 20 -> 30 -> null

console.log("Find 20:", list.find(20));   // 2
console.log("Find 99:", list.find(99));   // -1
console.log("Size:", list.size);          // 4

list.delete(20);
list.print();                        // 5 -> 10 -> 30 -> null

list.reverse();
list.print();                        // 30 -> 10 -> 5 -> null
