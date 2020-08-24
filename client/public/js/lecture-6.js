/**
 * CONSTRUCTOR
 */

// calling a fn with a new keyboard will run it as a contructor

// INSTANCE - CONSTRUCTOR - PROTOTYPE

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.print = function () {
//     console.log(this.name, this.age);
// };

// var p1 = new Person("reactjs", 10);
// var p2 = new Person("js", 15);
// p1.city = "bangalore";

// console.log(p1, p2);

// need to have a function which gives me name and age of the above 2 objects
// p1.print = function () {
//     console.log(this.name, this.age);
// };

// p2.print = function () {
//     console.log(this.name, this.age);
// };

// prototype of contructor === proto of p1 and proto of p2

// p1.print();
// p2.print();

// console.log(p1.__proto__ === Person.prototype); // true
// console.log(p2.__proto__ === Person.prototype); //true

/**
 * CLASSES
 */

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(this.name, this.age);
//     }
// }

// var p1 = new Person("react", 10);
// var p2 = new Person("js", 15);

// p1.print();
// p2.print();

// console.log(p1.__proto__ === Person.prototype); // true
// console.log(p2.__proto__ === Person.prototype); // true

class Car {
    constructor(wheels, color) {
        this.wheels = wheels;
        this.color = color;
    }
    printWheels() {
        console.log(`the count of wheels is ${this.wheels}`);
    }
}

const c1 = new Car(4, "white"); // {wheels:4, color:'white}
c1.printWheels(); //// 4

const c7 = new Car(7, "black"); // {wheels:4, color:'white}

c7.printWheels(); /// 4
//c1.print();

// Car prototype ---print
class Maruti extends Car {
    constructor(name) {
        super(4, "white");
        this.brand = "Maruti";
        this.name = name;
    }
    print() {
        super.print();
        console.log("printing local...");
    }
}

const m1 = new Maruti("Baleno"); // {brand:Maruti, name:"Baleno", wheels:4}

// Maruti prototype ---- print

// var m1 = new Maruti("Baleno");

// console.log(m1.print());
