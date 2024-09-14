/** 
 * ..............................................Remove Falsy Values:-.............................
 * 
Problem Statement: 

You have an array that may contain various falsy values (false, null, 0, "", undefined, and NaN). 
Your task is to remove all falsy values from the array. 
*/

function removeFalsyValue(arr) {
  return arr.filter(Boolean);
}
const arr = [0, 1, false, 2, "", 3, NaN, 4];
let res = removeFalsyValue(arr);
console.log(res);

/** Explanation:

array.filter(Boolean) - The Boolean function is used as a callback for filter. 
It converts each value to a Boolean (true or false). 
Falsy values will be converted to false and thus filtered out. */

// ................................................Another method:-....................................

function removeFalsy(array) {
  let box = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      // If the value is truthy, add it to the result array
      box.push(array[i]);
    }
  }
  return box;
}
const array = [0, 1, false, 2, "", 3, NaN, 4];
let result = removeFalsy(array);
console.log(result);

/** Explanation:

Iterate through each element in the array.

Use the if (array[i]) condition to check if the element is truthy. 
If it is, push it into the result array.

Return the result array which now contains only truthy values.

Both methods are effective, but using filter with Boolean is more concise and 
typically preferred for its readability and simplicity. 

*/
