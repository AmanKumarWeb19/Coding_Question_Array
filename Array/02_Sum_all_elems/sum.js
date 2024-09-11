/** Sum of All Elements */

// Arr.reduce method:-

let arr = [3, 5, 6, 8, 9, 3];
function SumAllElements(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

let sumAll = SumAllElements(arr);
console.log(sumAll);

// Using for loop:-

function SumAllArrayElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let array = [4, 5, 6, 7, 3, 4, 5, 6];
let sum = SumAllArrayElements(array);
console.log(sum);
