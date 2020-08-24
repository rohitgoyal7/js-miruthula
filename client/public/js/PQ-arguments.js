/**
 * PQ -1
 */
function foo(id, ...items) {
  console.log(arguments.length);
}
foo(1, 2, 3, 4, 5);

/**
 * PQ -2
 */
function foo() {
  console.log(typeof arguments);
}
foo();

/**
 * PQ -3
 */
function foo() {
  arguments[0] = 2;
  console.log(arguments[0]);
}
foo(1);

/**
 * PQ -4
 */
function foo(a, b) {
  console.log(foo.length);
}
foo(12, 3);

/**
 * PQ -5
 */
function foo(a, b) {
  arguments.forEach(() => {
    console.log("hi");
  });
}
foo(12, 3);

/**
 * PQ -6
 */
function foo(a, b) {
  console.log(arguments.length);
}
foo(12, 3);
