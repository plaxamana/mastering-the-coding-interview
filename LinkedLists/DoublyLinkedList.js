class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// TODO: finish implementing the doubly linked list methods

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isListEmpty() {
    return !this.head;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isListEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isListEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.head.prev = null;
    this.length++;
    return this;
  }

  printList() {
    let list = [];
    let current = this.head;
    while (current !== null) {
      list.push(current.value);
      current = current.next;
    }
    return list;
  }

  printListPointers() {
    let current = this.head;
    while (current !== null) {
      console.log(current);
      current = current.next;
    }
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index <= 0) {
      return this.prepend(value);
    } else {
      const newNode = new Node(value);
      let current = this.traverseToIndex(index - 1);
      newNode.next = current.next;
      current.next.prev = newNode;
      newNode.prev = current;
      current.next = newNode;
    }
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  remove(index) {
    if (index < 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    } else if (index >= this.length) {
      let current = this.traverseToIndex(this.length - 2);
      current.next = null;
      this.tail = current;
      this.length--;
    } else {
      let current = this.traverseToIndex(index - 1);
      current.next.next.prev = current;
      current.next = current.next.next;
      this.length--;
    }
  }

  getSize() {
    return this.length;
  }
}

const myLinkedList = new DoublyLinkedList();
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(50);
myLinkedList.insert(1, 100);
console.log('Printing List: \n----------');
myLinkedList.printListPointers();
console.log(myLinkedList.printList());
