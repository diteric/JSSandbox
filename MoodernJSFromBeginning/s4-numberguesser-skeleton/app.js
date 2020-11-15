let min = 1;
let max = 10;
let win = 4;

// set min and max in UI
document.querySelector(".min-num").textContent = min;
document.querySelector(".max-num").textContent = max;

const submitBtn = document.querySelector("#guess-value");
const input = document.querySelector("#guess-input");
const message = document.querySelector(".message");

submitBtn.addEventListener("click", function () {
  let guess = parseInt(input.value);

  // validate input
  if (isNaN(guess) || guess < min || guess > max) {
    input.style.borderColor = "red";
    message.style.color = "red";
    message.textContent = "Invalid input";
  } else if (guess === win) {
    input.style.borderColor = "green";
    message.style.color = "green";
    message.textContent = "Well done";
  } else {
    input.style.borderColor = "grey";
    message.style.color = "black";
    message.textContent = "";
  }
});
