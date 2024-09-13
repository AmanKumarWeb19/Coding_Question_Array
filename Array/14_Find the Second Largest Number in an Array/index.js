/** Find the Second Largest Number in an Array:-
 *
 * To find the second largest number in an array,
 * we can solve this using a for loop to traverse the array and compare elements.
 */

function secLargestNumber(arr) {
  let largest = -Infinity;
  let secLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secLargest && arr[i] !== largest) {
      secLargest = arr[i];
    }
  }
  return secLargest;
}
let arr = [12, 35, 1, 10, 34, 1];
let res = secLargestNumber(arr);
console.log(res);

// Second method :=>

// Function to find the second largest number
function secLargestNumber(arr) {
  let largest = Math.max(...arr); // Find the largest number in the array
  let secLargest = -Infinity; // Initialize second largest as -Infinity

  // Loop through the array to find the second largest number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== largest && arr[i] > secLargest) {
      secLargest = arr[i]; // Update second largest if the current number is smaller than largest
    }
  }

  return secLargest;
}

// Example usage
let array = [12, 35, 1, 10, 34, 1];
let result = secLargestNumber(array);

console.log(result); // Output: 34

/** Explanation:
We initialize two variables largest and secondLargest to -Infinity (smallest possible value), 
to ensure they get updated with actual numbers from the array.
The for loop goes through each element:
If the current element is greater than largest, 
we update secondLargest to the previous largest value and then update largest.
If the current element is smaller than largest but greater than secondLargest, we update secondLargest.
At the end, secondLargest contains the second largest number in the array.

Example:
For the input array [12, 35, 1, 10, 34, 1], the output will be 34 because it's the second largest number. 
*/
