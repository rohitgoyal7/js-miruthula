/**
 * arguments
 */

// function fn(a, b, c) {
//     console.log(a, b, c);
//     console.log(arguments);
// }

//fn(1, 2, 3, 4, 5, 6);

// fn = (a, b, c) => {
//     console.log(a, b, c);
//     console.log(arguments);
// };
// fn(1, 2, 3, 4, 5, 6);

/**
 * CLOSURE
 */
// function fn() {
//     const fn1 = () => {
//         console.log("byee", num);
//     };

//     const fn2 = () => {
//         fn1();
//         console.log("hiii");
//     };

//     const num = 10;

//     return function () {
//         fn2();
//     };
// }

// f1 = fn();
// f1();

// function fn(name) {
//     return function () {
//         console.log(name.toUpperCase());
//     };
// }

// f1 = fn("js");
// f1();

/**
 * REST OPERATOR ...
 */

// const fn = (...params) => {
//     console.log(params);
// };
// fn(1, 2, 3, 4);

// arr = [1, 2, 3, 4, 5];

// let [a, ...rest] = arr;
// console.log(a, rest);

/**
 * SPREAD OPERATOR ...
 */
// ES5
// a = [1, 2, 3];
// b = [4, 5, 6];
// c = a.concat(b);
// console.log(c);

// ES6
// d = [...a, ...b];
// console.log(d);

// obj1 = { a: 1, f: function () {} };
// obj2 = { b: 1 };
// obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// ... spread operator only merges the owned properties, not the inherited
// const o1 = {
//     a: 1,
//     b: 2,
// };
// const o2 = Object.create(o1);
// o2.c = 3;
// o2.d = 4;

// const o3 = {
//     e: 1,
//     f: 2,
// };
// const o4 = Object.create(o3);
// o4.g = 3;
// o4.h = 4;

// o5 = { ...o2, ...o4 };

// o6 = { ...o2, ...o4, ...o2.__proto__, ...o4.__proto__ };

// console.log(o6);

/**
 * DESTRUCTURING
 */
let obj = {
    a: 1,
    b: 2,
    c: 3,
};

// const a = obj.a;
// const b = obj.b;
// const c = obj.c;

// const { a, b, c, d } = obj;
// console.log(a, b, c, d);

// const {
//     a,
//     c: { e, f },
// } = { a: 1, c: { e: 10, f: 20 } };
// console.log(a, e, f);

// let { a = 10, b = 20, c = 30, d = 40 } = obj;
// console.log(a, b, c, d);

// let { a: a1, b, c } = obj;
// console.log(a1, b, c);

/**
 * Object.assign()
 */

// let obj1 = { a: 1 };
// let obj2 = { b: 1 };
// //let obj3 = { ...obj1, ...obj2 };
// const obj4 = Object.assign(obj1, obj2);

// var o1 = Object.assign({}, obj1, obj2);

// a = [1, 2, 3];
// b = [4, 5, 6];
// d = [5, 6, 7, 8];

// c = Object.assign([], a, b, d);

/** Array Methods */
// /var arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 1;
// }
// console.log(arr);

/**
 *  forEach is exactly same as for loop
 */

// arr.forEach((elem, index, array) => {
//     array[index] = elem + 1;
// });
// console.log(arr);

// arr.forEach(function (elem, index, array) {
//     array[index] = elem + 10;
// });

/********************************************************* */
// var arr = [1, 2, 3, 4]; // [2,3,4,5]
// arr1 = arr.map((elem, index, array) => {
//     return elem + 1;
// });
// console.log(arr1);

// var arr = [1, 2, 3, 4];
// arr1 = arr.filter((elem, index, array) => {
//     if (elem < 3) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(arr1);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// flag1 = arr.some((elem, index, array) => {
//     console.log(elem);
//     if (elem > 2) {
//         return true;
//     }
// });
// console.log(flag1);

// var arr = [1, 2, 3, 4];
// flag2 = arr.every((elem, index, array) => {
//     console.log(elem);
//     if (elem < 4) {
//         return true;
//     }
// });
// console.log(flag2);

// var arr = [1, 2, 3, 4];
// result = arr.reduce((accumulator, elem) => {
//     return accumulator + elem;
// }, 100);

// // 0 + 1 ---> 1
// // 1 + 2 ----> 3
// // 3 + 3 --->6
// // 6+ 4 --- 10

// console.log(result);

// var arr = [2, 3, 4]; // 2^3^4
// result = arr.reduce((accumulator, elem) => {
//     return Math.pow(accumulator, elem);
// });
// console.log(result);

// var arr = [2, 3, 4]; // 4^3^2
// result = arr.reduceRight((accumulator, elem) => {
//     return Math.pow(accumulator, elem);
// });
// console.log(result);

// arr = [1, 2, 3, [4, [5, 6, [7, [8]]]]];

// op = arr.flat(Infinity);
// console.log(op);

// var arr = [1, 2, 3, 4, 5, 6];
// if the elem is odd, don't do anything simply return it
// if the elem is even, break it into odd + 1
// [1, 1, 1, 3, 3, 1, 5, 5, 1];

var arr = [1, 2, 3, 4, 5, 6];

// [0,1,1,1,2,1,4,5,6]
arr2 = arr.flatMap((elem, index, array) => {
    if (elem > 3) {
        return [elem];
    } else {
        return [elem - 1, 1];
    }
});

// (...returnedVale)
console.log(arr2);

// arr1 = arr.flatMap((elem, index, array) => {
//     if (elem % 2 !== 0) {
//         return [elem];
//     } else {
//         return [elem - 1, 1];
//     }
// });
// console.log(arr1);
