/** Remove a Specific Element from an Array
 * You want to remove a specific element from an array using a for loop.
 */

function removeSpecificElement(arr, target) {
  let box = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      box.push(arr[i]);
    }
  }
  return box;
}
let arr = [1, 2, 3, 4, 5, 3, 6];
let target = 3;
let res = removeSpecificElement(arr, target);
console.log(res);

/** Explanation:
We initialize an empty array result to store elements that are not equal to the elementToRemove.
The for loop iterates through each element in the array.
If the current element is not equal to elementToRemove, it is pushed into the result array.
The function returns the modified array without the specified element.
Example:
For the input array [1, 2, 3, 4, 5, 3, 6] and element to remove as 3, the output will be [1, 2, 4, 5, 6]. 
*/
