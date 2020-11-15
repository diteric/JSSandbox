let min = 1;
let max = 10;
let win = 4;
let guessesLeft = 3;

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
    setStatus(false, "red", "red", `Invalid input`);
  } else if (guess === win) {
    setStatus(true, "green", "green", `Well done`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      submitBtn.disabled = true;
      setStatus(true, "red", "red", `Game Over: was ${win}`);
    } else {
      input.value = "";
      setStatus(false, "red", "red", `Time Left: ${guessesLeft}`);
    }
  }
});

function setStatus(inputStatus, inputBorder, msgColor, messageText) {
  input.disabled = inputStatus;
  input.style.borderColor = inputBorder;
  message.style.color = msgColor;
  message.textContent = messageText;
}
