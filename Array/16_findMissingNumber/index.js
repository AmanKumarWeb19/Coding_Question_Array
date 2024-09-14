/** 
 * 
 * Problem Statement: You are given an array of n distinct numbers ranging from 0 to n, 
 * but one number is missing. Your task is to find that missing number.

Example:

Input: [0, 1, 2, 4, 5, 6] (missing number is 3)
Output: 3
 * 
 */

function findMissingNumber(arr) {
  let n = arr.length;
  let totalSum = (n * (n + 1)) / 2;
  let arrSum = arr.reduce((acc, cur) => acc + cur, 0);

  return totalSum - arrSum;
}
let arr = [0, 1, 2, 4, 5, 6];
let res = findMissingNumber(arr);
console.log(res);

/** 
 * Explanation:
Calculate Total Sum:

const totalSum = (n * (n + 1)) / 2;
This formula calculates the sum of all numbers from 0 to n, where n is the length of the array.
Calculate Array Sum:

const arraySum = array.reduce((sum, num) => sum + num, 0);
Use the reduce method to get the sum of all elements in the array.
Find Missing Number:

return totalSum - arraySum;
The difference between the expected total sum and the actual sum of the array gives the missing number.
 */
