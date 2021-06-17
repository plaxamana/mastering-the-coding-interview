class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      // while currentNode exists
      while (currentNode) {
        // go left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
        // go right
        if (value >= currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    // while currentNode exists
    while (currentNode) {
      // if the value is less than the currentNode, traverse left
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        // if the value is greater than the currentNode, traverse right
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
        // if the value is equal to the currentNode, return the currentNode
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    // no match, return false
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    // add the root node to queue
    queue.push(currentNode);

    // while the queue is not empty
    while (queue.length > 0) {
      // remove the first item from the queue and assign it to currentNode
      currentNode = queue.shift();
      // take the currentNode value and add it to the list
      list.push(currentNode.value);
      // check if currentNode has a left child
      if (currentNode.left) {
        // add the left child to the queue
        queue.push(currentNode.left);
      }
      // check if currentNode has a right child
      if (currentNode.right) {
        // add the right child to the queue
        queue.push(currentNode.right);
      }
    }
    // the queue is empty, so return the list
    return list;
  }

  breadthFirstSearchR(queue, list) {
    // base case: if the queue is empty, return the list
    if (!queue.length) {
      return list;
    }
    // remove the first item from the queue and assign it to currentNode
    let currentNode = queue.shift();
    // add the currentNode value to the list
    list.push(currentNode.value);
    // check if there's a left child & add it to the queue
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    // check if there's a right child & add it to the queue
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    // call the function again
    return this.breadthFirstSearchR(queue, list);
  }

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }

  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }

  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

/* 
       9
    4     20
  1  6  15  170
*/

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(traverse(tree.root));
// console.log(tree.lookup(170));
// console.log("list:", tree.breadthFirstSearch());
// console.log("list recursive:", tree.breadthFirstSearchR([tree.root], []));
console.log(tree.DFSInOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}