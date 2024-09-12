/** 
 * 
 * Problem:
You need to take a multi-dimensional array (array with nested arrays) and flatten it into a single-level
 * 
 */

// using Array.flat method:-

const multiDimensionalArray = [1, [2, [3, 4], 5], [6, 7]];

function flattenArray(multiDimensionalArray) {
  return multiDimensionalArray.flat(Infinity);
}

let res = flattenArray(multiDimensionalArray);
// console.log(res);

// another way to solve this
let ar = [1, [2, [3, 4], 5], [6, 7]];
function flattedArray(ar) {
  let box = [];
  for (let i = 0; i < ar.length; i++) {
    if (Array.isArray(ar[i])) {
      box = box.concat(flattedArray(ar[i]));
    } else {
      box.push(ar[i]);
    }
  }
  return box;
}

/** Explanation 2:
Recursion: If an element is an array, the function calls itself to flatten that array and then concatenates the result with box.
Base case: When the element is not an array, it is directly pushed into the box array.
This approach ensures that the array is fully flattened, regardless of how deeply nested it is.

Example:
For the input [1, [2, [3, 4], 5], [6, 7]], the output will be [1, 2, 3, 4, 5, 6, 7]. */

let resu = flattedArray(ar);
console.log(resu);

/**.................................................................................................. */

// Using For Loop:-

let arr = [1, [2, 3], [4, 5], [6, 7]];

function flatArray(arr) {
  let box = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        box.push(arr[i][j]);
      }
    } else {
      box.push(arr[i]);
    }
  }
  return box;
}

let result = flatArray(arr);
// console.log(result);

/** 
 * 
 * Explanation:
Single-Level Check: This approach assumes that you only have nested arrays up to one level deep. 
If you have deeper nesting, this solution won't handle that.
Outer for loop: Iterates through the elements of the main array.
Inner for loop: Iterates through elements of the nested arrays and adds them to the result.
Direct push: Non-array elements are directly added to the result.
Example:
Given the input [1, [2, 3], [4, 5], 6, 7], the output is [1, 2, 3, 4, 5, 6, 7].

This method is easy and straightforward for cases where nested arrays are only one level deep. 
If you need to handle deeper nesting, the recursive approach would be more suitable.
 * 
 */
