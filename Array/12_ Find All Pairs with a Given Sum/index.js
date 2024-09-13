/**  Find All Pairs with a Given Sum
 *
 * You need to find all pairs of numbers in an array that add up to a given sum. Here's a solution using
 *
 */

function findPairs(arr, targetSum) {
  let box = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        box.push([arr[i], arr[j]]);
      }
    }
  }
  return box;
}

let arr = [1, 2, 3, 4, 5, 6];
let targetSum = 7;
let res = findPairs(arr, targetSum);
console.log(res);
