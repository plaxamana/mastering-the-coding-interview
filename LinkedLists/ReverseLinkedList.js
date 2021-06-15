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

  reverse() {
    if(!this.head.next) {
      return this.printList()
    }
    let prev = null;
    let current = this.head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this.printList()
  }
}

// original: [10,2,4,5]
// reversed: [5,4,2,10]
const myList = new LinkedList(10);
myList.append(2)
myList.append(4)
myList.append(5)
console.log(myList.reverse());
console.log(myList);