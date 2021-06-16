function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // is 1st item larger than 2nd?  Swap.
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const myArray = [3, 8, -1, -88, 50, 58, 60, 100, -21];
const sorted = bubbleSort(myArray);
console.log(sorted);
