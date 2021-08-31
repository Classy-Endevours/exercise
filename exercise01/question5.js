'use strict';
/**
 ===== Question 5 [6 points] =====
 *
 * The function processNumbers uses a classical for loop and a local result variable to process the numbers in a given array and to get the result.
 * variable result to process the numbers in a given array and return a result
 * return.
 *
 * Implement the body of the processNumbers2 function.
 * Make the function return the same result but use the array * only.
 * Only use the array function reduce.
 * Note that you cannot use a local variable in processNumbers2.
 */

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 1];

const processNumbers = function (numbers) {
  let result = 0;
  for (let index = 1; index < numbers.length; index += 2)
    result += numbers[index] / numbers.length;
  return result;
};

/* Solution */
const processNumbers2 = function (numbers) {};

/****** Voorbeeld uitvoer ******/
console.log(
  `Het resultaat van aanroep processNumbers is ${processNumbers(numbers)}`
); // Het resultaat van aanroep processNumbers is 20.1
console.log(
  `Het resultaat van aanroep processNumbers2 is ${processNumbers2(numbers)}`
); // The result of calling processNumbers2 is 20.1
