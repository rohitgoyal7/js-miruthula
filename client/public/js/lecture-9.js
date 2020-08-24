// "use strict";
/**
 * USE STRICT
 * https://www.geeksforgeeks.org/strict-mode-javascript/
 */

// b = 10;

// let obj = {};
// Object.defineProperty(obj, "a", {
//   value: 10,
//   writable: false,
// });
// obj.a = 20;
// console.log(obj);

// function fn(a, a) {
//   console.log(a);
// }
// fn(1, 2);

// "use strict";

// var obj = {
//   fn: function () {
//     console.log("hii");
//     function fn1() {
//       console.log(this);
//     }
//     fn1();
//   },
// };
// obj.fn();

// b = 10;
// function fn() {
//   "use strict";
//   a = 10;
// }
// fn();

/**
 * ASYNC PROGAMMING
 */

// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(() => {
//   console.log(4);
// }, 1000); //ms // call stack - fn(){} , 0 sec

// console.log(5);
// console.log(6);
// console.log(7); // 1 sec

// var destroy = setInterval(() => {
//   console.log("hiii");
// }, 1000); // ms

// setTimeout(() => {
//   clearInterval(destroy);
// }, 7000); //ms

// let p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({name: "promise"});
//     //reject("server error");
//   }, 2000);
// });

// console.log("start");
// p.then(function (data) {
//   console.log("then block...");
//   console.log(data);
// })
//   .catch(function (err) {
//     console.log("catch block...");
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("done....");
//   });
// console.log("end");

// fetch, axios, ....

// fetch("/getUsers")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// 1st api response then only call 2nd api

// fetch("/getUsers")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("first");
//     console.log(data);
//     fetch("/getInfo")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("second");
//         console.log(data);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const sum = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// // let s1 = sum(1, 2);
// // s1.then((data) => {
// //   console.log(data);
// // });

// fetch("/getUsers")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("first");
//     console.log(data);
//     fetch("/getInfo")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("second");
//         console.log(data);
//         fetch("/getInfo")
//           .then((response) => response.json())
//           .then((data) => {
//             console.log("second");
//             console.log(data);
//           });
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fn = async () => {
//   const result1 = await (await fetch("/getUsers")).json();
//   console.log("got the first response");
//   console.log(result1);
//   const result2 = await (await fetch("/getUsers")).json();
//   console.log("got the second response");
//   console.log(result2);
//   const result3 = await (await fetch("/getUsers")).json();
//   console.log("got the third response");
//   console.log(result3);
// };
// fn();

// const p = new Promise((res, rej) => {
//   let time = 5;
//   setInterval(() => {
//     time = time - 1;
//     if (time === 0) {
//       res("tournament started");
//     }
//   }, 1000);
// });

// p.then((data) => {
//   alert(data);
// });

/**
 * USEFUL LINKS
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 */

/**
 * BOM
 */

/**
 * DOM-CSSDOM
 */

/**
 * display title of the page
 */

/**
 * display URL
 */

/**
 * open a new tab and write something
 */
// myWindow = window.open();
// myWindow.document.write("<p>This is 'myWindow'</p>");

/**
 * number of elements of a particular id, class, tagname, name
 */

/**
 * change color
 */

/**
 * change visibility
 */

// access a node
// update a node
// create a node
// delete a node

// var div = document.createElement("h1");
// var text = document.createTextNode("hello");
// div.appendChild(text);

// <div>
//   <span>this is new elem</span>
//   <b>bold</b>
//   <i>italic</i>
// </div>;

// var div = document.createElement("div");

// var span = document.createElement("span");
// var spanText = document.createTextNode("this is new elem");
// span.appendChild(spanText);
// div.appendChild(span);

// var bold = document.createElement("b");
// var boldText = document.createTextNode("Bold");
// bold.appendChild(boldText);
// div.appendChild(bold);

// createNode = (item) => {
//   const li = document.createElement("li");
//   var liText = document.createTextNode(item);
//   li.appendChild(liText);
//   return li;
// };

// const length = 5;
// for (let i = 0; i < length; i++) {
//   const li = createNode(i);
//   document.getElementById("list").appendChild(li);
// }
