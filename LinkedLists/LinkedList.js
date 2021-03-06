class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
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
      current.next = current.next.next;
      this.length--;
    }
  }

  getSize() {
    return this.length;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(40);
myLinkedList.prepend(220);
myLinkedList.prepend(69);
myLinkedList.insert(0, 23);
myLinkedList.insert(99, 100);
console.log("before insert:", myLinkedList.printList());
console.log("LinkedList size:", myLinkedList.getSize());
myLinkedList.insert(1, 500);
console.log("after insert:", myLinkedList.printList());
console.log("LinkedList size:", myLinkedList.getSize());
myLinkedList.remove(3)
console.log("after remove:", myLinkedList.printList());
console.log("LinkedList size:", myLinkedList.getSize());