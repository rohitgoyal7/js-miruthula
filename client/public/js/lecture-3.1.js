/************************************************************* */

// function fn() {
//     // let a; // initialization phase
//     console.log(a);
//     let a = 2;
//     if (true) {
//         console.log(a); // 2
//     }
// }
// fn();

/************************************************************* */

/**
 * PRACTICE QUESTION - 1
 */

// var a = 1;
// function b() {
//     a = 10; // re-assignment
// }
// b();
// console.log(a); // 10

/**
 * PRACTICE QUESTION - 2
 */
var foo = 1; // global
{
    let foo = 2; // local
    foo = 3; // re-assignment
    var bar = 4; // local
}
console.log(foo); //  1
console.log(bar); // error
