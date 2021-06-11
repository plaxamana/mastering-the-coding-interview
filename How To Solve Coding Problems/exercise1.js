// write a function that returns true if a common element is found in both arrays
/* 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a']; 
-- returns false
 
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];
-- returns true
*/

// Why is this approach not the best?
// The runtime of this function is O(n * m)

const containsCommonItem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};


const first = ["a", "b", "c", "x"];
const second = ["z", "y", "c"];

console.log(containsCommonItem(first, second));

const containsCommonItem2 = (arr1, arr2) => {
  // loop through first array and create a hashmap
  let map = {}
  for (let i=0; i<arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true
    }
  }
  // loop through second array and check if the array matches a property in the hashmap
  for (let j=0; j<arr2.length; j++) {
    if(map[arr2[j]]) {
      return true;
    }
  }

  return false;
}

console.log(containsCommonItem2(first, second))