console.log("hiiiii");

// non typed
var a = 1;
a = "js";
a = true;
a = {};

// DATA TYPES

var a = 1; // number
var a = "js"; // string
var a = true; // boolean
var a = null; // null
var a = undefined; // undefined
var a = Symbol(); // symbol
var a = {}; // object

// var b = 2;
// //console.log(b);

// b = null;
// console.log("b", b);

// var b = Symbol();
// var c = Symbol();
// var d = Symbol("true");

// console.log(b, c);
// // console.log(b == c);

// var symb1 = Symbol("id");
// var symb2 = Symbol("id");

// var obj = {
//     a: 1,
//     a: 2,
//     symb1: 3,
//     symb2: 4,
// };

// console.log(obj);

// for (var i in obj) {
//     console.log(i);
// }

// var obj = {
//     [Symbol("id")]: 1,
//     name: "js",
// };

// console.log(obj);

// Primitive data types
// Non primitive data types

// var a = 1;

// // wrapper object
// a.toExponential();
// wrapper object will get destoyed

// Wrapper - boolean string and number

// var a = 1;
// a = 2;

// var a = [1, 2];

/**
 * FALSY CONDITION
 */

// null undefined NaN "" false 0

if ("1/1") {
    console.log("true....");
} else {
    console.log("false....");
}

/**
 * STRING METHODS

 */
var str = "javaScript";

/**
 * ARRAY METHODS
 * toString()
 * join()
 * push() - ok
 * pop() -ok
 * unshift() - ok
 * shift() - ok
 * reverse - ok
 * delete operator
 * concat() - ok
 * splice
 * slice
 */

// splice
// 1st argument - index where to push
// 2nd argu --- count of the items you want to pop
// 3rd argument -- the value which  needs to be pushed

// str = "javascript"

//1. reverse an Array
//2. convert an array to string

/**
 * Math
 * Math.ceil()
 * Math.floor()
 * Math.pow()
 * Math.random()
 */

// Math.random() -- give u a random number with in a range of 0(inclusive) to 1(exclusive)

/**
 * PRACTICE QUESTION 0
 * write a function which returns random integer from 1 to 10
 */

Math.ceil(Math.random() * 10);

/**
 * USEFUL LINKS
 * https://javascript.info/types
 * https://www.w3schools.com/js/js_string_methods.asp
 * https://www.w3schools.com/js/js_number_methods.asp
 * https://www.w3schools.com/js/js_array_methods.asp
 * https://www.w3schools.com/js/js_math.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 **/
