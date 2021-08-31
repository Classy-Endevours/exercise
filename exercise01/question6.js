/**
 ===== Question 6 [17 points] =====
 * Write a class Dress which has the following private properties:
 * _type: a string representing the type of dress
 * _fabrics: a set of strings representing types of fabrics
 *
 * The following domain rule must always be respected:
 * the number of different fabrics for a dress cannot be more than 3.
 *
 * Write a constructor that gets values for the properties of a dress through its parameters.
 * for the properties of a dress. As you can see in the example output,
 * you can call the constructor with any number of fabrics.
 *
 * Provide a getter for the property _type.
 * Provide a getter for the property _fabrics. This getter returns
 * an array with all the fabrics alphabetically sorted.
 *
 * Write a method toString(). Look at the example output to see what this method should return.
 * method should return exactly.
 *
 * * Write a getter suitableForWool. The getter returns true if the property _fabrics
 * contains the value 'wool', otherwise the getter returns false.
 *
 * Write a method addFabric(fabric). This method adds fabric to the property
 * _fabrics if the domain rule is met.
 * If the domain rule is not met, this method throws an Error
 * with an appropriate message.
 **/

/* Solution */

class Dress {
    constructor() {
        console.log(arguments)
    }
}

/****** Example of output ******/
const myDress = new Dress('Wrap dress', 'wool', 'silk', 'denim');
console.log(myDress.toString());
// Dress type: Wrap dress
// Number of fabrics: 3
const myOtherDress = new Dress('Ballgown', 'silk');
console.log(myOtherDress.toString());
// Dress type: Ballgown
// Number of fabrics: 1
console.log(myDress.suitableForWool);
// true
myDress.addFabric('denim');
console.log(myDress.toString());
// Dress type: Wrap dress
// Number of fabrics: 3
myThirdDress = new Dress('Wrap dress', 'wool', 'silk', 'denim', 'wool', 'silk');
console.log(myThirdDress.toString());
// Dress type: Wrap dress
// Number of fabrics: 3

// To check the throwing of Errors, you can uncomment the following pieces of code
// uncomment these code snippets.

// const tooManyFabricsDress = new Dress(
//   'Pinafore dress',
//   'fabric1',
//   'fabric2',
//   'fabric3',
//   'fabric4'
// ); // Uncaught Error: Too many fabrics!

// myDress.addFabric('linnen'); // Uncaught Error: Too many fabrics!
