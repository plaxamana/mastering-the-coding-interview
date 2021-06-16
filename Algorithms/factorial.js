function findFactorialRecursive(n) {
  if(n < 1) {
    return 1;
  }
  return findFactorialRecursive(n-1) * n;
}

function findFactorialIterative(n) {
  let answer = 1;
  for(let i=n; i>0; i--) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(4))
// console.log(findFactorialIterative(3))