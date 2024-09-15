/** .....................................For Loop ..................................................... */

/** Example: Print numbers from 1 to 10 */

for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}

/** Example: Print numbers from 10 to 1 */

for (let i = 10; i >= 1; i--) {
  //   console.log(i);
}

/** .....................................While Loop................................................... */

/** Example: Print numbers from 1 to 10 */

let i = 1;
while (i <= 10) {
  //   console.log(i);
  i++;
}

/** Example: Print numbers from 10 to 1 */

let j = 10;
while (j >= 1) {
  //   console.log(j);
  j--;
}

/** ........................................Do While................................................... */

/** Example: Print numbers from 1 to 10 */

let k = 1;
do {
  //   console.log(k);
  k++;
} while (k <= 10);

/** Example: Print numbers from 10 to 1 */

let m = 10;
do {
  //   console.log(m);
  m--;
} while (m >= 1);

/**................................................................................................ */

/** Nested loops are loops inside other loops. They are often used for handling multi-dimensional data. */

// Example: Multiplication Table (5x5)

for (let i = 1; i <= 5; i++) {
  let multiply = [];
  for (let j = 1; j <= 10; j++) {
    multiply.push(i * j);
  }
  //   console.log(multiply);
}

// Example: Print a star triangle pattern

for (let i = 1; i <= 5; i++) {
  let bag = "";
  for (let j = 1; j <= i; j++) {
    bag += "*";
  }
  //   console.log(bag);
}

// break

// Example: Break the loop when i is 5

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  //   console.log(i);
}

// Continue
/**  continue Statement

The continue statement skips the current iteration and continues with the next iteration.
 */

// Example: Skip even numbers:

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue;
  }
  //   console.log(i);
}

/** Print the factorial of numbers from 1 to 5 using a loop. */
