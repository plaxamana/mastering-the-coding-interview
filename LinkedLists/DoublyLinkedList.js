class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// TODO: finish implementing the doubly linked list methods

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.length === 1) {
      newNode.prev = this.head;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
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

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(50);
console.log(myLinkedList.printList());
myLinkedList.printListPointers();
