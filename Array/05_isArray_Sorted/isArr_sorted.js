/**  Check if Array is Sorted. */

let arr = [5, 6, 7, 8, 2, 3, 4, 9];

function isSortedArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

let checkIsArraySorted = isSortedArray(arr);
console.log(checkIsArraySorted);
