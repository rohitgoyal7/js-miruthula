/**
 * Hoisting
 */

/**
 * TEMPORAL DEAD ZONE
 */

/*********************************************************** */
// console.log(a); // error
// var a = 1;
// var a = 2;
// console.log(a);

// // initialization phase ---- creation phase
// var a;
// console.log(a); // undefined
// a = 1;
// console.log(a); // 1

// console.log(a); // undefined
// var a = 10;
// console.log(a);
// function fn() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// fn();

/*********************************************************** */

// function fn() {
//     console.log(a); // undefined
//     var a = 2;
//     console.log(a); // 2
// }
// fn();
// console.log(a); // error

// initialization phase

/************************************************************* */

// function fn() {
//     //let a;

//     console.log(a);
//     const a = 2;
// }
// fn();

// //initialization phsae

/************************************************************* */

// fn();
// function fn() {
//     console.log("hii");
// }

// initialization phsae
// function fn() {
//     console.log("hii");
// }
// fn();

/************************************************************* */

// bar();
// foo();
// function bar() {
//     console.log("hiii");
// }
// var foo = function () {
//     console.log("byeee");
// };

// initialization phase
// var foo;
// function bar() {
//     console.log("hiii");
// }
// bar(); //
// foo();
// foo = function () {
//     console.log("byeee");
// };
