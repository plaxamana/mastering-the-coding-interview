class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if(this.isEmpty()) return 'stack is empty';
    return this.top;
  }

  pop() {
    if(this.isEmpty()) return this.length;
    if(!this.top.next) {
      this.top = null;
      this.length = 0;
      return this;
    }
    this.top = this.top.next;
    this.length--;
    return this.length;
  }

  push(value) {
    let newNode = new Node(value)
    if(this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this.length;
  }

  isEmpty() {
    return this.length === 0
  }

  printStack() {
    let current = this.top;
    console.log(`printing stack\n-----------`);
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
    console.log(`-----------\nend of stack`);
  }
}

const myStack = new Stack();
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(44)
myStack.push(11)
myStack.push(191)
myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.printStack();
console.log('top: ',myStack.peek());