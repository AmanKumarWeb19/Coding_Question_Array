/**  Find the Largest Number in an Array. */

// using Math.Max method:-

function Find_Largest_Number(arr) {
  return Math.max(...arr);
}

let arr = [6, 7, 4, 2, 10, 14, 76, 34, 23];
let find = Find_Largest_Number(arr);
console.log(find);

// Using For Loop:-

function findLargest(array) {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

let array = [22, 44, 55, 33, 66, 77, 123, 43, 67, 89, 90];
let largestFind = findLargest(array);
console.log(largestFind);
