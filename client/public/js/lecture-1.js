/**
 * USEFUL LINKS
 * https://javascript.info/types
 * https://www.w3schools.com/js/js_string_methods.asp
 * https://www.w3schools.com/js/js_number_methods.asp
 * https://www.w3schools.com/js/js_array_methods.asp
 * https://www.w3schools.com/js/js_math.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 **/

// console.log("i m executed...");

// var a = "js";
// a = 1;

// // non typed
// var a = 1;
// a = "js";
// a = true;
// a = {};

// // DATA TYPES

// var a = 1; // number
// var a = "js"; // string
// var a = true; // boolean
// var a = null; // null
// var a = undefined; // undefined

// var a = 100;
// a = null; // not recommended

// var b;
// console.log("a", a);
// console.log("b", b); // undefined

// var obj = {
//     a: 1,
//     b: 2,
//     a: 3,
// };

// console.log(obj);

// var a = Symbol("id"); // 986789857889009 - unique number
// var b = Symbol("id"); // 897564536636790

var obj = {
    [Symbol()]: 1,
    b: 2,
    [Symbol()]: 3,
};
console.log(obj);

// abc
var obj = {
    id: 1,
};

obj.id = 100;
