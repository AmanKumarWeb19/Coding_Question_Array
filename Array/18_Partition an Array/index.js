/** Partition an Array:-
 * 
 * Problem Statement: 
 * You are given an array and a condition (e.g., a predicate function).
 * Your task is to partition the array into two subarrays based on this condition. 
 * One subarray should contain elements that satisfy the condition, 
 * and the other should contain elements that do not.
 * 
 * Example:

Input: [1, 2, 3, 4, 5] and a condition x => x % 2 === 0 (i.e., check if the number is even)
Output: [[2, 4], [1, 3, 5]]
 */

function Partition(arr) {
  let oddArr = [];
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }
  return [oddArr, evenArr];
}
let arr = [1, 2, 3, 4, 5];
let res = Partition(arr);
console.log(res);
