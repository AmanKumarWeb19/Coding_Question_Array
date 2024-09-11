/** Merge Two Arrays. */

let arr1 = [1, 3, 5, 7, 6, 2];
let arr2 = [23, 54, 76, 98, 22];
function mergeTwoArray(arr1, arr2) {
  return [...arr1, ...arr2];
}
let mergeArr = mergeTwoArray(arr1, arr2);
// console.log(mergeArr);

// ..........................................................................................................

// using loop :-

let array1 = [1, 3, 5, 7, 6, 2];
let array2 = [23, 54, 76, 98, 22];

function arrMerge(array1, array2) {
  let box = [];
  for (let i = 0; i < array1.length; i++) {
    box.push(array1[i]);
  }

  for (let j = 0; j < array2.length; j++) {
    box.push(array2[j]);
  }

  return box;
}

let twoMergeArr = arrMerge(array1, array2);
// console.log(twoMergeArr);

//...............................................................................................

// using concat mehthod:-

function concatTwoArray(ar1, ar2) {
  return ar1.concat(ar2);
}
let ar1 = [5, 6, 7, 4, 3, 2];
let ar2 = [9, 7, 5, 7, 4, 2, 5, 6];
let concat = concatTwoArray(ar1, ar2);
console.log(concat);
