/**
 * OBJECTS BASICS
 */

const obj = {
    a: 1,
    b: 2,
    c: 3,
};

const fName = "";
const lName = "";
const address = "";

const person = {
    fName: "",
    lName: "",
    address: "",
};

console.log(person.fName);

/**
 * OBJECT CREATION - can be of 3 kinds
 */

const obj1 = {}; // most used
const obj2 = new Object(); // not frequently used
const obj3 = Object.create({}); // depends on use case

// let pObj = {
//     a: 1,
//     b: 2,
//     c: 10,
//     d: 40,
// };
// let cObj = Object.create(pObj);
// cObj.c = 3;
// cObj.d = 4;

// console.log(cObj.c); // 3
// console.log(cObj.d); // 4
// delete cObj.c;
// console.log(cObj.c); // 10
// console.log(cObj.a); // 1
// delete pObj.a;
// console.log(cObj.a); // undefined

let obj1 = { a: 1 };
let obj2 = Object.create(obj1);
obj2.a = 2;
let obj3 = Object.create(obj2);
obj3.a = 3;

// obj1 ---- obj2 ----- obj3

// console.log(obj3.a); // 3
// delete obj2.a;
// delete obj3.a;
// console.log(obj3.a); // 1

/********************************************************8 */

// TRAVERSE A PROTOTYPE ( __proto__ )

const pObj = {
    print: function () {
        console.log("print....");
    },
};

const o1 = Object.create(pObj);
o1.name = "js";

const o2 = Object.create(pObj);
o2.name = "reactjs";

// pObj ----- o1
// pObj ----- o2

/**
 * PROTOTYPES
 */
// let parentObj = {
//     a: 1,
//     b: 2,
// };
// let childObj = Object.create(parentObj);
// childObj.c = 3;
// console.log(childObj);

/********************************************************8 */

/**
 * FOR-IN
 */
//for..in loop - goes till the prototype chain

// const o2 = { d: 4, e: 5 };
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;

// for (prop in o1) {
//     console.log(prop);
// }

/**
 * IN OPERATOR
 */
//  in operator - goes till the prototype chain

// const o2 = { d: 4, e: 5 };
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;
// console.log("a" in o1);

/**
 * DELETE OPERATOR
 */
// delete operator - doesnt traverse  the prototype chain

// const o2 = { d: 4, e: 5 };
// const o1 = Object.create(o2);
// o1.a = 1;
// o1.b = 2;
// o1.c = 3;
// delete o1.c;
// delete o1.d; // wont do anything
// delete o1.__proto__.d;

/********************************************************8 */

// let pObj = {
//     a: 1,
//     b: 2,
// };
// let cObj = Object.create(pObj);
// cObj.c = 3;
// delete cObj.c;
// delete cObj.a;
// console.log(cObj);

/**
 * GETTERS and SETTERS
 */

// prop of an obj  which should be only numbers from 0-10

let obj = {
    a: 1,
    get b() {
        return this.a;
    },
    set b(val) {
        if (val > 5) {
            this.a = val; // this is obj
        }
    },
};

obj.b = 10;
console.log(obj.b); // 10
obj.b = 1;
console.log(obj.b); // 10

/**
 * ENUMBERABLE, CONFIGURABLE, WRITABLE properties
 */
let obj = {};
obj.a = 1;

// console.log(Object.getOwnPropertyDescriptor(obj, "a"));

// Object.defineProperty(pObj, "b", {
//     value: 2,
//     enumerable: false,
//     writable: true,
//     configurable: true,
// });

// // pObj(b, non-enumerable) ----- cObj(c:enumerable, d: non-enumerable)

/********************************************************8 */

// pObj(b, non-enumerable) ----- cObj(c:enumerable, d: non-enumerable)

console.log("a" in cObj); // false
console.log("b" in cObj); // true
console.log("c" in cObj); // true
console.log("d" in cObj); // true

/**
 * PRACTICE QUESTION - 1
 */

// make all enumberable owned properties of cObj as writable false

const pObj = {
    a: 1,
};

Object.defineProperty(pObj, "b", {
    value: 2,
    enumerable: false,
    writable: true,
    configurable: true,
});

const cObj = Object.create(pObj);
cObj.c = 3;

Object.defineProperty(cObj, "d", {
    value: 4,
    enumerable: false,
    writable: true,
    configurable: true,
});

// pObj (a: E, b:NE) ------> cObj (c: E, d:NE)

for (let prop in cObj) {
    // prop ---- c and a
    if (cObj.hasOwnProperty(prop)) {
        Object.defineProperty(cObj, prop, {
            writable: false,
        });
    }
}
