class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let list = [];
    let current = this.head;
    while(current !== null) {
      list.push(current.value)
      current = current.next
    }
    return list
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
console.log(myLinkedList)
myLinkedList.prepend(40);
myLinkedList.prepend(220);
myLinkedList.prepend(69);
console.log(myLinkedList);
console.log(myLinkedList.printList());