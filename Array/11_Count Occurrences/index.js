/** 11th Question: Count Occurrences of an Element in an Array
You want to count how many times a specific element appears in an array using a for loop. */

function occurance(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}

let arr = [1, 2, 3, 4, 1, 1, 5, 2, 6, 1];
let element = 1;
let res = occurance(arr, element);
console.log(res);
