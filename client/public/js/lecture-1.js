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

// console.log(a == b); // true

// var a = Symbol(); // symbol
// var a = {}; // object

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
