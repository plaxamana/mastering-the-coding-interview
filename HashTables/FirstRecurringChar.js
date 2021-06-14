/* 
  Google Question
  Given an array = [2,5,1,2,3,5,1,2,4]
  it should return 2

  [2,1,1,2,3,5,1,2,4] 
  it should return 1

  [2,3,4,5]
  it should return undefined
*/

function returnFirstRecurringChar(array) {
  // initializing our hashmap
  let hash = {};
  // looping through the array
  for (let i = 0; i < array.length; i++) {
    // if key does not exist, initialize it to 1
    if (!hash[array[i]]) {
      hash[array[i]] = 1;

      // we found an existing key, increment by 1 and return it
    } else {
      hash[array[i]] += 1;
      return array[i];
    }
  }
  // we found no recurring keys, return undefined
  return undefined;
}

console.log("1st", returnFirstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4])); // returns 2
console.log("2nd", returnFirstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4])); // returns 1
console.log("3rd", returnFirstRecurringChar([2, 3, 4, 5])); // undefined
