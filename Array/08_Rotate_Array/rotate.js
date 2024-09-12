/** Rotate an Array */

// Unshift Method:-

function rotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  //   console.log(arr);
}
let arr = [1, 2, 3, 4, 5];
let k = 2;
rotateArray(arr, k);

/** **************************************************************************************************** */

// Slice method:-

let array = [1, 2, 3, 4, 5, 6, 7];
let numberOfShift = 3;

function rotationArray(array, numberOfShift) {
  let deletedArray = array.splice(array.length - numberOfShift); // [5,6,7]

  for (let i = 0; i < deletedArray.length; i++) {
    array.splice(i, 0, deletedArray[i]); // splice(0,0,5) , splice(1,0,6) , splice(2,0,7)
  }
  console.log(array);
}
rotationArray(array, numberOfShift);
