class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this.length;
    }
    let current = this.first;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    this.last = newNode;
    this.length++;
    return this.length;
  }

  dequeue() {
    if (this.isEmpty()) return "queue is empty";
    let removed = this.first;
    this.first = this.first.next;
    this.length--;
    return removed;
  }

  isEmpty() {
    return this.length === 0;
  }

  printQueue() {
    if (this.isEmpty()) return "queue is empty";
    let current = this.first;
    console.log(`start\n-----`);
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
    console.log(`-----\nend`);
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log('removing: ',q.dequeue());
q.printQueue();
