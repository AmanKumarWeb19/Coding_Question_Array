/**  Remove Duplicates from an Array. */

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

let arr = [3, 4, 5, 6, 7, 4, 3, 6];
let duplicate = removeDuplicates(arr);
console.log(duplicate);

// Using Loop :-

function removeDup(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] === undefined) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]]++;
    }
  }

  let uniqueArr = [];
  for (let key in obj) {
    if (obj[key] > 0) {
      uniqueArr.push(Number(key));
    }
  }
  return uniqueArr;
}

let array = [3, 4, 5, 5, 7, 4, 3, 7, 1, 8, 9, 0];
let removeDuplicateElements = removeDup(array);
console.log(removeDuplicateElements);
