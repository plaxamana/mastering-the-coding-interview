class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
    this.data = [];
  }

  peek() {
    if (this.isEmpty()) return "stack is empty";
    return this.top;
  }

  pop() {
    if(!this.top) return 0;
    let popped = this.data.pop();
    this.length--;
    this.top = this.data[this.length-1];
    return popped;
  }

  push(value) {
    this.data.push(value);
    this.length++;
    this.top = this.data[this.length-1];
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  printStack() {
    console.log(`printing stack\n-----------`);
    for(let i=this.length-1; i >= 0; i--) {
      console.log(this.data[i]);
    }
    console.log(`-----------\nend of stack`);
  }
}

const myStack = new Stack();
myStack.push(10)
myStack.push(-1)
myStack.push(5)
myStack.push(5)
myStack.push(5)
myStack.push(5)
myStack.pop()
myStack.pop()
myStack.printStack()
console.log(myStack.peek())
