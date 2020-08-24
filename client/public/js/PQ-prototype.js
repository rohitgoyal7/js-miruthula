/**
 * PQ -1
 */
class Task {
  constructor(natme) {
    this.name = name;
  }
  get() {
    return this.name;
  }
}
var t1 = new Task("t1");
var t2 = new Task("t2");
Task.prototype.get = "value";
console.log(t1.get());

/**
 * PQ -2
 */
var Employee = {
  company: "xyz",
};
var emp = Object.create(Employee);
delete emp.company;
console.log(emp.company);

/**
 * PQ -3
 */
function Person() {
  console.log(this);
}
var p1 = new Person();

/**
 * PQ -4
 */
function Person() {}
Person.prototype.get = function () {
  console.log(this);
};
var p1 = new Person();
person.get();

/**
 * PQ -5
 */
function Employee(name) {
  this.name = name;
}
Employee.prototype.getName = function () {
  return this.name;
};
var e1 = new Employee("John");
var e2 = new Employee("Doe");
console.log(e1.getName === e2.getName);

/**
 * PQ -6
 */
function Employee(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}
var e1 = new Employee("John");
var e2 = new Employee("Doe");
console.log(e1.getName === e2.getName);

/**
 * PQ -7
 */
function foo() {
  this.baz = "baz";
  console.log(this.bar, baz);
}
var bar = "bar";
new foo();

/**
 * PQ -8
 */
var Employee = {
  company: "xyz",
};
var emp = Object.create(Employee);
delete Employee.company;
console.log(emp.company);
