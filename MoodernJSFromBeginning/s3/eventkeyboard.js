const formEle = document.querySelector("form");
const formTestInputEle = document.querySelector("#task");

// clear input
formTestInputEle.value = "";

// handle submit event on form element
formEle.addEventListener("submit", runEvent);

function runEvent(e) {
  console.log(`event type: ${e.type}`);
  console.log(formTestInputEle.value);
  e.preventDefault();
}
console.log(formEle);

// handle keydown event on input
formTestInputEle.addEventListener("keydown", runKeyDown);
function runKeyDown(e) {
  console.log("key down: " + e.target.value);
}

// handle keydown event on input
formTestInputEle.addEventListener("keyup", runKeyUp);
function runKeyUp(e) {
  console.log("key up: " + e.target.value);
}

// handle keypress event on input
formTestInputEle.addEventListener("keyup", runKeyPress);
function runKeyPress(e) {
  console.log("key press: " + e.target.value);
}

// handle focus(in) and blur(out) event on input

// handle cut event on input
formTestInputEle.addEventListener("cut", (e) => console.log(`${e.type}`));

// handle INPUT event on input - all the input element related events
formTestInputEle.addEventListener("input", (e) => console.log(`${e.type}`));

// handle change event on select
// eable materialize select using JS
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});

const selectEle = document.querySelector("select");
selectEle.addEventListener(
  "change",
  (e) => console.log(`${e.type} + ${e.target.value}`) // event type and target's value
);
