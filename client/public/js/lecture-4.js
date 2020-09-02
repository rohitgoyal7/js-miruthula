/**
 * USEFUL LINKS
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
 * https://www.w3schools.com/js/js_type_conversion.asp
 */

/**
 * TYPE COERCION
 */

// console.log(1 == 1);
// console.log(1 == "1");
// compare number and string, string gets type coersed to number

//console.log(6 > true); // 6 > 1
// compare number and boolean, boolean gets type coersed to number
//console.log(false > 1);

// falsy conditions
// null
// undefined
// false
// 0
// NaN
// ""

/*
in order to compare, we need to have LHS and RHS with the same data type
1=="1"
1== false
1 == NaN
*/

// false -> 0
// true -> 1

// console.log(1 + "javascript"); // number gets type coersed to string

// console.log(1 + 2 + "3"); // 3 + "3"

// console.log(1 - "2"); //-1

// --> Explicit conversion to String
// a=[1,2,3] ----- a.toString()

// console.log([1] + "2");
// console.log([1, 2] + [3, 4]); // toString() gets applied

// COMPARING A NUMBER TO STRING --- string gets converted to number
// 4 > "3";
// 4 / "2";

// --> Explicit conversion to Boolean
// if ({}) {
// }

// if ([]) {
// }

// --> Implicit conversion to String, Number , Boolean

/**
 * PRACTICE QUESTIONS
 */
// 1 + 2 + "3"; // 3 +"3" // "33"
// 1 > 2 > 3; // false > 3 // 0> 3 // false
// 6 < 7 < 8; // true < 8 // 1<8 // true
// 1 + 2 + "3";
// "1" + 2 + 3; // "12" + 3 // "123"
// null > undefined;

/**
 * ====
 * (===) --> JS wont type coerce the data types
 *
 * == ---> JS compares the value only
 * === --> JS comares the data type and the value, if data types are diff, always false..... if same it will check the value
 */

/**
 * PRACTICE QUESTION - 1
 */
// let a = 1;
// let b = "1";
// console.log(a == b); // true
// console.log(a === b); // false

/**
 * PRACTICE QUESTION - 2
//  */
// let a = 1.0;
// let b = 1;
// console.log(a == b, a === b); // true, true

/**
 * PRACTICE QUESTION - 3
 */
// let a = null;
// let b = undefined;
// console.log(a == b, a === b); // true, false

/**
 * TYPEOF
 */

/**
 * NaN
 */
