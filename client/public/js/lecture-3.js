/**
 * Hoisting
 */

/**
 * TEMPORAL DEAD ZONE
 */

/*********************************************************** */
// console.log(a);
// var a = 1;

//initialization phase ---- creation phase

/*********************************************************** */

// function fn() {
//     console.log(a);
//     var a = 2;
//     console.log(a);
// }
// fn();

// initialization phase

/************************************************************* */

// function fn() {
//     console.log(a);
//     let a = 2;
// }
// fn();

// //initialization phsae

/************************************************************* */

// fn();
// function fn() {
//     console.log("hii");
// }

// initialization phsae

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
// bar();
// foo();
// foo = () => {
//     console.log("byeee");
// };

/************************************************************* */

// function fn() {
//     console.log(a);
//     var a = 2;
// }
// fn();

/************************************************************* */

// function fn() {
//     let a = 2;
//     if (true) {
//         // let a; -- initialization phase
//         console.log(a); // 2
//         // let a = 3;
//     }
// }
// fn();

/************************************************************* */

// var a = 1;
// function fn() {
//     a = 10;
//     return;
//     function a() {}
// }
// fn();
// console.log(a); // 1

/************************************************************* */

/**
 * PRACTICE QUESTION - 1
 */

// var a = 1;
// function b() {
//     a = 10;
//     return;
// }
// b();
// console.log(a);

/**
 * PRACTICE QUESTION - 2
 */
// var a = 1;
// function b() {
//     a = 10;
//     return;
//     function a() {
//         console.log("hiii");
//     }
// }
// b();
// console.log(a); // 1

/**
 * PRACTICE QUESTION - 3
 */

// run();
// walk(); //
// function run() {
//     console.log("running...");
// }
// var walk = function () {
//     console.log("crawling....");
// };
// run();
// walk(); // available

/**
 * PRACTICE QUESTION - 4
 */
// var foo = 1;
// {
//     let foo = 2;
//     foo = 3;
//     const bar = 4;
// }
// console.log(foo);
// console.log(bar);
