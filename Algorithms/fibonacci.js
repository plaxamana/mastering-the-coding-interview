// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let prev0, prev1 = 0;
  let currentNum = 1;

  for(let i=1; i<n; i++) {
    prev0 = prev1;
    prev1 = currentNum;
    currentNum = prev0 + prev1;
  }
  return currentNum;
}

function fibonacciRecursive(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(7));
console.log(fibonacciIterative(7));
