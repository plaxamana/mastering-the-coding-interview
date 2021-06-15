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

  throw new Error('No match found');
}

// for the unsorted array - using the map object
function twoSum2(array, target) {
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];

    // check if our map has a complement
    if (map.has(complement)) {
      // return the map key, and current index
      return [map.get(complement), i];
    }
    // add the current number as key, and index as value
    map.set(array[i], i);
  }
}

// also for unsorted array - using object
function twoSum3(array, target) {
  // initialize our empty map
  let map = {};

  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // find the complement target number by subtracting target - current number
    let complement = target - array[i];
    // if the current number exists in our map, return the index of the map, and current index
    if (map[array[i]] !== undefined) return [map[array[i]], i];
    // if no match was found earlier, store the complement number as a key and the index as the value
    map[complement] = i;
  }
}

const answer2 = twoSum2([2, 4, 6, 8], 10);
const answer3 = twoSum3([2, 4, 6, 8], 10);
console.log(answer2);
console.log(answer3);
