/**
 * FUNCTIONS
 */

// CLASSICAL FUNCTION
// function fn(a, b) {
//     console.log("classcal function");
// }

// const fn = (a, b) => {
//     console.log("classcal function");
// };

// fn();
// console.log(1);
// console.log(2);
// fn();

// (function () {
//     console.log("iife");
// })();

// console.log(3);
// console.log(4);
// fn();

// (() => {
//     console.log("iife arrow function");
// })();

/*********************************************** */
// fn();
// function fn() {
//     console.log("classical function");
// }

// fn1();
// const fn1 = () => {
//     console.log("arrow function");
// };

/*********************************************** */

// var obj = {
//     a: 1,
//     b: 2,
//     printA: function (name) {
//         console.log(`${this.a} and name is ${name}`); // this ---- obj
//     },
// };

// obj.printA("js"); // 1 , js

// var obj1 = {
//     a: 10,
//     b: 20,
//     print: function (name, year) {
//         console.log(
//             `a: ${this.a} and b: ${this.b} and name is ${name} and year is ${year}`
//         ); /// this --obj2
//     },
// };

// obj1.print("reactjs", 2014);

// var obj2 = {
//     a: 100,
//     b: 200,
// };

// /**
//  * BIND CALL APPLY
//  */

// // access a fn written in some other object
// f1 = obj1.print.bind(obj2);
// f1("js", 1991);

// obj1.print.call(obj2, "angularjs", 2010);

// obj1.print.apply(obj2, ["angularjs", 2010]);

var obj1 = {
    a: 10,
    b: 20,
    print: (name, year) => {
        console.log(`a: ${this.a} and b: ${this.b} `); /// this --- obj1
    },
};

// obj2 = {
//     a: 100,
//     b: 200,
// };

// obj1.print();

// obj1.print.call(obj2);

// var obj = {
//     a: 1,
//     fn: function () {
//         console.log(this.a); // this --- obj
//         function fn1() {
//             console.log(this.a); // this --- window
//         }
//         fn1();
//     },
// };
// obj.fn();

// var obj = {
//     a: 1,
//     fn: function () {
//         console.log(this.a); // this --- obj

//         fn1 = () => {
//             console.log(this.a); // this --- obj
//         };
//         fn1();
//     },
// };

// obj.fn();

// var obj = {
//     a: 100,
//     fn: function () {
//         console.log(this.a); // this --- obj

//         fn1 = () => {
//             console.log(this.a); // this --- obj

//             fn2 = () => {
//                 console.log(this.a); // this ---- obj
//             };
//             fn2();
//         };
//         fn1();
//     },
// };

// obj.fn();

/**
 * DOUBT
 */

// function bar() {
//     console.log(p);
// }

// function foo() {
//     var p = 10;
//     bar();
// }

// foo();
