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

/** Explanation:
We iterate through the array using two nested loops.
For each pair of elements (arr[i] and arr[j]), we check if their sum equals the target sum.
If the sum matches the target, we push the pair into the pairs array.
Finally, the function returns all pairs that meet the condition.

Example:
For the input array [1, 2, 3, 4, 5, 6] and a target sum of 7, 
the pairs [ [1, 6], [2, 5], [3, 4] ] are returned. 
*/
