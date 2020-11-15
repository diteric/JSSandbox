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
const game = document.querySelector("#game");

submitBtn.addEventListener("click", function () {
  let guess = parseInt(input.value);

  // validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setStatus(false, "red", "red", `Invalid input`);
  } else if (guess === win) {
    // game over win
    setStatus(true, "green", "green", `Well done`);
    playAgain();
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // game over lose
      setStatus(true, "red", "red", `Game Over: was ${win}`);
      playAgain();
    } else {
      input.value = "";
      setStatus(false, "red", "red", `Time Left: ${guessesLeft}`);
    }
  }
});

// play again listener
game.addEventListener("mousedown", (e) => {
  // mousedown , not click - click = (mousedown + mousedown), try to use mouse down
  if (e.target.classList.contains("play-again")) {
    window.location.reload(); //!!!!
  }
});

function playAgain() {
  submitBtn.value = "Play Again";
  submitBtn.className += "play-again";
}

function setStatus(inputStatus, inputBorder, msgColor, messageText) {
  input.disabled = inputStatus;
  input.style.borderColor = inputBorder;
  message.style.color = msgColor;
  message.textContent = messageText;
}

// random integer between min and max
function getRandomWinNumber() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
