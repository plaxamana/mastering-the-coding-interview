const numbers = [1, 4, 6, 9, 12, 34, 45, 66];

function binarySearch(numbers, number) {
  let lo = 0;
  let hi = numbers.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    if (numbers[mid] === number) return true;
    else if (number > numbers[mid]) {
      lo = mid + 1;
    }
    else {
      hi = mid - 1;
    }
  }
}

console.log(binarySearch(numbers, 34))