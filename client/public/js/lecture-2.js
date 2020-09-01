/**
 * BLOCK SCOPE vs FUNCTION SCOPE vs GLOBAL SCOPE
 */

/**
 * REDECLARING VAR, LET and CONST
 */

// var b = 20; // global scope variable
// function fn() {
//     var a = 10; // function scope
//     console.log(a); // 10
// }
// console.log(b);
// fn();

// var a; //global
// var b = 2;
// function fn() {
//     var a = 1; // function scope
//     var b = 3;
//     console.log("a", a); // 1
//     console.log("b", b); // 3
// }
// fn();
// console.log(a); // undefined
// console.log("b", b); // 2

// var c = 3;
// var a = 100;
// function fn2() {
//     var a = 4;
//     var b = 2;
//     console.log("a", a); // 4
//     console.log("b", b); // 2
//     console.log("c", c); // 3
// }
// function fn1() {
//     var a = 1;
//     var b = 10;
//     fn2();
//     console.log(a); // 1
// }
// fn1();
// console.log("c outer", c); // 3

// {
//     let a = 10; // block scope
// }

// console.log(a);

// function fn() {
//     {
//         let a = 100; // block scope
//         var b = 100; // function scope
//         console.log(a); // 100
//     }
//     console.log(a); // error
//     console.log(b); // 100
// }
// fn();

// function fn() {
//     {
//         const a = 1; // function scope variable
//     }
//     console.log(a);
// }
// fn();
// console.log(a);

// {
//     var a = 1; // global
// }
// console.log(a);

// {
//     let a = 1; // block
// }
// console.log(a);

// if (true) {
//     var a = 1; // global
//     const b = 2; // block
//     let c = 3; // block
// } else {
//     //
// }
// console.log("a", a); // 1
// console.log("b", b); // error
// console.log("c", c);

// {
//     const a = 1; // block
//     console.log("a inner", a); //1
// }
// console.log("a outer", a); // not defined

// let a = 10;
// a = 20;
// console.log(a); // 20

// const a = 10;
// a = 20;
// console.log(a); // 20

// var a = 1;
// function fn1() {
//     if (true) {
//         var a = 2; // function scope
//     }
//     console.log(a); // 2
//     function fn2() {
//         if (true) {
//             var a = 3; // function scope
//         }
//         console.log(a); // 3
//     }
//     fn2();
// }
// fn1();
// console.log(a); // 1

// var a = 1;
// function fn1() {
//     if (true) {
//         let a = 2; // block scope
//     }
//     console.log(a); // 1
//     function fn2() {
//         if (true) {
//             let a = 3; // block scope
//         }
//         console.log(a); // 1
//     }
//     fn2();
// }
// fn1();
// console.log(a); // 1

// const a = 2;
// {
//     const a = 1;
//     function fn1() {
//         console.log(a); // 1
//     }
//     fn1();
// }

// const a = 2;
// function fn1() {
//     {
//         const a = 1;
//         {
//             console.log(a); // 1
//         }
//     }
// }
// fn1();

// {
//     var a = 1; // global scope
//     console.log(a, "inner"); // 1
// }
// console.log(a, "outer"); // 1

// {
//     const a = 1;
//     console.log(a, "inner"); // 1
// }
// console.log(a, "outer"); // error

// {
//     let a = 2;
//     a = 3;
//     console.log(a); // 3
// }
// var a = 1;
// console.log(a); //1

{
    var a = 2;
    a = 3;
    console.log(a); // 3
}
let a = 1;
console.log(a); // error

// var a = 10;
// var a = 100; // re-declaration
// a = 200; // re-assignment
// console.log(a); // 100

// let b = 10;
// b = 20; // re-assignment

// const c = 10;
// c = 20; // re-assignment

// var a = 10;
// let a = 100;
