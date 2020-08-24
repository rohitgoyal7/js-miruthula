/************************************************************************* */

/**
 * EVENTS IN JS
 * https://www.w3schools.com/js/js_events.asp
 *
 * IMPORTANT
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/which
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
 */

// document.getElementById("button").addEventListener("click", (e) => {
//   console.log(e.target);
// });

// document.getElementById("textField").addEventListener("keyup", function (e) {
//   console.log(e.target.value);
// });

document.getElementById("block").addEventListener("mouseover", function (e) {
    this.style.background = "green";
});

document.getElementById("block").addEventListener("mouseout", function (e) {
    this.style.background = "white";
});

// /**
//  * BUBBLING
//  */
// document.getElementById("parent").addEventListener("click", (e) => {
//   console.log("parent clicked...");
// });
// document.getElementById("child").addEventListener("click", (e) => {
//   console.log("child clicked...");
// });

/**
 * CAPTURING
 */
// document.getElementById("parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent clicked...");
//   },
//   true
// );
// document.getElementById("child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child clicked...");
//   },
//   true
// );
// document.getElementsByTagName("body")[0].addEventListener(
//   "click",
//   (e) => {
//     console.log("body clicked...");
//   },
//   true
// );

/**
 * EVENT DELEGATION
 */

// let lis = document.getElementsByTagName("li");
// lis = [...lis];
// lis.forEach((li) => {
//   li.addEventListener("click", () => {
//     console.log(li.innerText);
//   });
// });

// document.getElementById("list").addEventListener("click", (e) => {
//   console.log(e.target.innerText);
// });

/**
 * STOP PROPAGATION
 */
// document.getElementById("parent").addEventListener("click", (e) => {
//   console.log("parent clicked...");
// });

// document.getElementById("child").addEventListener("click", (e) => {
//   console.log("child clicked...");
//   e.stopPropagation();
// });

// document.getElementById("link").addEventListener("click", (e) => {
//   console.log("clickedd....");
//   e.preventDefault();
// });

/// attached 5 events to all 5 elems
// lets say to modify the function which is getting called, iterate --- modify - for

/// attaching only 1 event and achieve the same result

/**
 * DEBOUNCE
 */

// closure
// timeout
// cleartimeout

// const debounce = () => {
//   let timeout = "";
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       makeAnApiCall();
//     }, 1000);
//   };
// };

// const makeAnApiCall = () => {
//   console.log("call to server triggered...");
// };

// document.getElementById("debounce").addEventListener("keyup", debounce());

// document.getElementById("debounce").addEventListener("keyup", function (e) {
//   console.log(e.target.value);
// });

const throttle = () => {
    let flag = true;
    return () => {
        if (flag) {
            makeAnApiCall();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, 1000);
        }
    };
};

const makeAnApiCall = () => {
    console.log("hello all...");
};

document.getElementById("throttle").addEventListener("click", throttle());

// document.getElementById("throttle").addEventListener("click", function () {
//   console.log("server call...");
// });
