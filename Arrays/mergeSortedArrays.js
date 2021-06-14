function mergeSortedArrays(arr1, arr2) {
  if(arr1.length && arr2.length < 1) {
    return [];
  }

  let newArray = [];
  let arraySize = arr1.length + arr2.length;
  let j = 0
      k = 0;
  
  while (arr1[j] || arr2[k]) {
    if(!arr2[k] || arr1[j] <= arr2[k]) {
      newArray.push(arr1[j])
      j++;
    } else {
      newArray.push(arr2[k])
      k++;
    }
  }

  return newArray;
  // [0, 3, 4, 4, 6, 30, 31]
}

console.log(mergeSortedArrays([0,3,4,31,33,40,59],[4,6,30,100,120]))
// [0, 3, 4, 4, 6, 30, 31]
