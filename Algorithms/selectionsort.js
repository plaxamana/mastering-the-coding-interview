const numbers = [51, 8, 3, 9, 1, 0, 99, 120, 4];

function selectionSort(arr) {
  for (let i=0; i<arr.length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j=i+1; j<arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr;
}

console.log(selectionSort(numbers));