# Big O Notation

Or otherwise known as: Asymptotic Notation.

[Big O Cheat Sheet](https://www.bigocheatsheet.com/)

## What is good code?

It must be:

1. Readable
2. Scalable (How we can measure Big O)

## What is an Algorithm?

_Think about how we would bake a cake_
![Analogy of an Algorithm](./2.png)

We have a recipe, and an oven, hopefully to bake a cake.
The recipe are instructions, the oven is like your computer, and hopefully you can make a program to do something (like turning on the light).

Simply put, an **algorithm** is a set of instructions to perform a task, like how a recipe contains a list of the ingredients and instructions to follow to bake or cook something.

```js
// How long does it take a certain problem through a problem
// What is the efficiency of this code?

// This is the runtime
const nemo = ["nemo"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found nemo");
    }
  }
}
```

Big O notation is the language we use for talking about how long an algorithm takes to run. Which one is better when it comes to scale?

![Big O Complexity Chart](./BigO_Cheatsheet.png)

# O(n) - Linear Runtime

```js
// What is the Big O of the function?
const nemo = ["nemo"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found nemo");
    }
  }
}
```

The Big O of this function is O(n) because, if Nemo isn't found on the first index, but on the very last one, then we can say that at its worse case scenario, is O(n) - linear time. O(n) means that as the number of inputs grow, so does the number of operations, _linearly_. 1:1

# O(1) - Constant time

```js
// What is the runtime of thie function?

function compressFirstBox(boxes) {
  console.log(boxes[0]); // This is O(1).
}
```

It's only grabbing the first item in the array. So it will always take 1 operation.

## Big O Exercise 1

```js
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++;
  }
  return a;
}

// answer: it's O(n)
```

## Big O Exercise 2

```js
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}

// answer: it's also O(n)
```

## Simplifying Big O

When calculating Big O, we can do the following:

- Drop the constants
- Drop the less significant terms
- We're usually talking about worst case

Example 1:

```js
function printAllItemsTwice(items) {
  items.forEach((item) => {
    console.log(item);
  });

  // Once more, with feeling
  items.forEach((item) => {
    console.log(item);
  });
}

// This is O(2n), which simplifies to O(n)
```

Example 2:

```js
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log("hi");
  }
}

// This is O(1 + n/2 + 100), which is simply just O(n)
```

Example 3:

```js
function contains(haystack, needle) {
  // Does the haystack contain the needle?
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}

// This is O(n).  The needle could be in the very last of the haystack
```

# O(n^2) - Quadratic time

Look for nested loops

```js
const boxes = [1, 2, 3, 4, 5];

function logAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = 0; j < arr.length; j++) {
      // O(n)
      console.log([arr[i], arr[j]]);
    }
  }
}

// O(n * n) = O(n^2)
```

# O(n!) - n factorial

Adding a loop for every element

# 3 Pillars Of Programming

Good code is:

1. Readable
2. Scalable
   - Speed
   - Memory

3 Pillars Of Programming:

1. Readable
2. Memory (Space Complexity)
3. Speed (Time Complexity)

# Space Complexity

Sometimes, instead of optimizing for time, we would like to optimize for space. When we talk about "Memory Cost", we are specifying Space Complexity (very similar to how we talk about time complexity). We look at the total size (relative to the size of the input) of any new variables we're allocating.

We can ask ourselves, are we creating any new variables when we run this function?

When talking about space complexity, we are asking ourselves if any **_additional_ space** is being created, excluding the space taken up by the inputs.

![Picture of function creating space](./3.png)

Example 1:

```js
function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log("hi");
  }
}
// O(1) space, fixed number of variables
```

Example 2:

```js
function arrayOfHiNTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}
// O(n) space, the hiArray scales for every element in the input array.
```

Example 3:

```js
function getLargestItem(items) {
  let largest = -Number.MAX_VALUE;
  items.forEach((item) => {
    if (item > largest) {
      largest = item;
    }
  });
  return largest;
}
// O(1) space, largest variable is only being reassigned if the item happens to be larger.
```

*Premature optimization can be the root of all evil*

Sometimes, having the code more readable is better in the long run than being clever.  Make your code easily readable first, then try to optimize it.