/**
 * USEFUL LINKS
 * https://javascript.info/types
 * https://www.w3schools.com/js/js_string_methods.asp
 * https://www.w3schools.com/js/js_number_methods.asp
 * https://www.w3schools.com/js/js_array_methods.asp
 * https://www.w3schools.com/js/js_math.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 **/

/**
 * FALSY CONDITION
 */

// null undefined NaN "" false 0

// truthy and falsy conditions in js

// function a() {
//     return 1;
// }

// if (a()) {
//     console.log("true");
// } else {
//     console.log("false....");
// }

// var d = null;

// d && d.name && d.age;

/**
 * STRING METHODS

 */

var a = 10;

/**
 * ARRAY METHODS
 * toString()
 * join()
 * push() - ok
 * pop() -ok
 * unshift() - ok
 * shift() - ok
 * splice
 * reverse - ok
 * delete operator
 * concat() - ok
 * slice
 */

// splice
// 1st argument - index where to push
// 2nd argu --- count of the items you want to pop
// 3rd argument -- the value which  needs to be pushed

// str = "javascript"

/**
 * Math
 * Math.ceil()
 * Math.floor()
 * Math.pow()
 * Math.random()
 */

//Math.random() -- gives a random number with in a range of 0(inclusive) to 1(exclusive)

/**
 * PRACTICE QUESTION 0
 * write a function which returns random integer from 1 to 10
 */

Math.ceil(Math.random() * 10); // 0-10(0 inclusive and 10 exclusive)   -- (1 -10)
