/**
 * PQ -1
 */
var obj = {
  get: function () {
    console.log(this);
  },
};
obj.get();

/**
 * PQ -2
 */
console.log(this === window);

/**
 * PQ -3
 */
function bar() {
  console.log(this);
}
bar();

/**
 * PQ -4
 */
var obj = {
  get: function () {
    return this;
  },
};
console.log(obj.get() === obj);

/**
 * PQ -5
 */
var p = 10;
console.log(this.p);

/**
 * PQ -6
 */
("use strict");
function bar() {
  console.log(this);
}
bar();

/**
 * PQ -7
 */
function foo() {
  var a = 5;
  bar();
}
function bar() {
  console.log(this.a);
}
var a = 10;
foo();

/**
 * PQ -8
 */
console.log(typeof this);
