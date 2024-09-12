/** 
 * 
 Problem:

You need to find the index of a given element in an array. If the element is not found, return -1.

*/

let arr = [15, 20, 90, 56, 77, 65];
let element = 56;

function FindIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}
let res = FindIndex(arr, element);
console.log(res);
