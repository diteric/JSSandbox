// addEventListener on an element
document
  .querySelector(".clear-tasks")
  .addEventListener("click", () => console.log("lamda"));

document.querySelector(".clear-tasks").addEventListener("click", function () {
  console.log("callback");
});

document.querySelector(".clear-tasks").addEventListener("click", function (e) {
  console.log("event example");
  e.preventDefault(); // stop redirect after click using event object
  console.log(e.target);
  console.log(e.target.className);
  e.target.innerText = "Hello"; // change the target's status
  console.log(e.type); // click, mouseover....
  console.log(e.timeStamp);

  // coordinates event relative to the window
  console.log(e.clientY); // vertical axis
  console.log(e.clientX); // horizontal axis

  // coordinates event relative to the ELEMENT itself
  console.log(e.offsetY);
  console.log(e.offsetX);
});
