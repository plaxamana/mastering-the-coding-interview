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

  insert(position, value) {
    const newNode = new Node(value);
    if (position > this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    } else if (position <= 1) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    } else {
      let current = this.head;
      let i = 1;
      while (i + 1 !== position) {
        current = current.next;
        i++;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
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
myLinkedList.insert(3, 500);
console.log("after insert:", myLinkedList.printList());
console.log("LinkedList size:", myLinkedList.getSize());
