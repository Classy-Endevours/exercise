'use strict';
/**
 * ===== Question 1 [8 points] =====
 * Given the variable skateboardBrands. Solve sub-questions 1.1 to 1.3
 * according to the following instructions.
 **/

const skateboardBrands = [
  {
    sizes: [8.35, 8.45, 8.5],
    brandName: 'Element'
  },
  {
    sizes: [8.35, 8.45],
    brandName: 'Baker'
  },
  {
    sizes: [8.38, 8.5],
    brandName: 'Primitive'
  }
];

// 1.1 Use array destructuring to declare the first and third skateboardBrand in one statement to the variables
// myBrand and myOtherBrand the first and the third skateboardBrand from
// the array skateboardBrands.
/* 1.1 Solution */

// 1.2 Add to the sizes of myBrand the value 7.35 in front.
/* 1.2 Solution */

// 1.3 If the sizes of a skateboardBrand contains at least one value
// less than 8 then the skateboardBrand has kids sizes, otherwise not.
// Implement the function showHasKidsSizes(brand). The function returns a string.
// Rely on the sample output to determine the exact return value.
// Note that the function should only contain one return statement.
/* 1.3 Solution */

/****** Example of output ******/
console.log(showHasKidsSizes(myBrand)); // Element boards have kids sizes
console.log(showHasKidsSizes(myOtherBrand)); // Primitive boards have no kids sizes
