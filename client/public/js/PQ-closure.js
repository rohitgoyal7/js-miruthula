/**
 * PQ -1
 */
var p = 1;
function foo() {
  var p = 2;
  setTimeout(() => {
    console.log(p);
  }, 1000);
}

/**
 * PQ -2
 */
function foo(p) {
  var value = p;
  return function () {
    value = value + 10;
    return value;
  };
}
var fn = foo(50);
console.log(fn());

/**
 * PQ -3
 */
var b = 100;
function foo() {
  var b = 200;
  return function () {
    console.log(b);
  };
}
console.log(foo()());

/**
 * PQ -4
 */
var b = 15;
function foo() {
  var b = 5;
  function bar() {
    console.log(b);
  }
  exec(bar);
}
function exec(fn) {
  var b = 10;
  fn();
}
foo();
