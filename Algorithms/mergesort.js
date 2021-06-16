const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  // Split Array in into right and left

  const left = array.slice(0, mid);
  const right = array.slice(mid);
  console.log('Left:', left);
  console.log('Right:', right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];
  // Break out of the loop if any one of the array get empty
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // concatenating the leftover elements
  // (in case we didn't go throught the entire left or right array)
  console.log(left, right);
  return [...arr, ...left, ...right];
}

const answer = mergeSort(numbers);
console.log(answer);
