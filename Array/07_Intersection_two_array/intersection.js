/** Find Intersection of Two Arrays  */

//  Using Filter and includes method :-

let arr1 = [2, 3, 4, 5, 6, 7];
let arr2 = [1, 0, 8, 9, 4, 5];

function intersectionTwoArray(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

let res = intersectionTwoArray(arr1, arr2);
console.log(res);

/** 
 * Explanation:
filter() method: Loops through each element of arr1 and checks 
if the element exists in arr2 using the includes() method.

includes() method: Checks if an element is present in arr2 and returns true if it's found.

Key Benefits:
Simpler to Write: This approach avoids manual loops and is compact.
Easy to Understand: The logic is clear, as filter() and includes() do most of the work.
 * 
*/

//......................................................................................................

function intersection(array1, array2) {
  let box = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      if (!box.includes(array1[i])) {
        box.push(array1[i]);
      }
    }
  }
  return box;
}

let array1 = [4, 5, 6, 7, 8, 9];
let array2 = [5, 1, 2, 3, 0, 7];
let result = intersection(array1, array2);
console.log(result);

/** 
 * 
 * Explanation:
Outer Loop (for loop): 
Iterate over each element in the first array (arr1).
Check for Existence (includes()): For each element in arr1, check if it exists in arr2 using arr2.includes().

Avoid Duplicates (!intersection.includes()): Before adding the element to the result array (intersection), 
check if it's already in the intersection array to avoid duplicates.
Add to Result: If the element is in both arrays and not already in the result, add it to intersection.

Key Points:
arr2.includes(arr1[i]): Checks if arr1[i] exists in arr2.
!intersection.includes(arr1[i]): Ensures no duplicates are added to the result array.
This method is easy to understand and ensures that you only add common elements once to the intersection array.
 * 
 */
