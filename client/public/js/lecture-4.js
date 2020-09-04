/**
 * USEFUL LINKS
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
 * https://www.w3schools.com/js/js_type_conversion.asp
 */

/**
 * TYPE COERCION
 */

// 7C2
// comparing a number with a string --- string gets type coersed to number
//console.log(1 == "1"); // 1 == 1 // true

// compare number and boolean, boolean gets type coersed to number
// true --- 1
// false ---0
// console.log(6 > true); // 6>1

// console.log(false > 1);

// falsy conditions
// null
// undefined
// false
// 0
// NaN
// ""

// console.log("*****");
// console.log(1 == NaN);

// console.log(1 + "javascript"); // number gets type coersed to string

// console.log(1 - "2"); //string gets type coersed to number

//console.log(1 + 2 + "3"); //3 + "3" // "33"

// --> Explicit conversion to String
// a=[1,2,3] ----- a.toString()

// console.log([1] + "2"); // toString() gets applied
// console.log([1, 2] + [3, 4]);

// COMPARING A NUMBER TO STRING --- string gets converted to number
4 > "3";
4 / "2";

// explicit type coercion

// --> Explicit conversion to Boolean
// if ({}) {
// }

// if ([]) {
// }

// --> Implicit conversion to String, Number , Boolean

/**
 * PRACTICE QUESTIONS
 */
// 1 + 2 + "3"; // "33"
// 1 > 2 > 3; // false > 3 // 0>3
// 6 < 7 < 8; // true < 8 // 1 < 8 //true
// "1" + 2 + 3; // "12" + 3  // "123"

/**
 * PRACTICE QUESTION - 1
 */
// let a = 1;
// let b = "1";
// console.log(a == b); // it checks for the value only
// console.log(a === b); // it checks for the value and the data type

/**
 * PRACTICE QUESTION - 2
//  */
// let a = 1.0;
// let b = 1;
// console.log(a == b); // true
// console.log(a === b); // true

/**
 * PRACTICE QUESTION - 3
 */
// let a = null;
// let b = undefined;
// console.log(a == b); // true
// console.log(a === b); // false

/**
 * TYPEOF
 */
// var a = 10;
// console.log(typeof a);

// typeof null; //  object
// typeof NaN; // number

/**
 * NaN
 */
// how can you check if a variable is NaN or not
var a = 10; // number or NaN
console.log(a === a); // false --- NaN
