/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 
*/

// this solution assumes they're sorted
function twoSum(array, target) {
  let j = 0;
  let k = array.length - 1;

  while (j < k) {
    if (array[j] + array[k] === target) {
      return [j, k];
    }

    if (array[j] + array[k] < target) {
      j++;
    } else {
      k--;
    }
  }

  return [-1];
}

const answer = twoSum([2, 4, 6, 8], 20);
console.log(answer);
