/** Reverse an Array */

// with array.reverse method

let array = [1, 2, 3, 4, 5];
function ReverseArray(array) {
  return array.reverse();
}

let checkReverse = ReverseArray(array);
console.log(checkReverse);

// with For Loop :-

let arr = [2, 5, 7, 8, 9, 3];

function ReverseArr(arr) {
  let box = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    box.push(arr[i]);
  }
  console.log(box);
}
ReverseArr(arr);
