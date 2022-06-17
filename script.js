const array = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;
const buttonsBox = document.querySelector(".buttons-container");
const restart = document.createElement("button");
const handleClick = (e) => {
  // Calls the game function providing the Button ID and a random computer selection
  game(e.target.id, array[Math.floor(Math.random() * array.length)]);
};
// Listens for clicks on any of the three buttons on the page
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

// Checks who won the round and returns the round winner to the game function
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "PLAYER";
  } else if (
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    return "COMPUTER";
  } else {
    return "It's a tie.";
  }
}

// Handles the game until anyone scores 5 points
function game(playerSelection, computerSelection) {
  let round = playRound(playerSelection, computerSelection);
  if (round == "PLAYER") {
    alert(`Player wins.\nThe computer picked ${computerSelection}.`);
    playerPoints++;
  } else if (round == "COMPUTER") {
    alert(`Computer wins.\nThe computer picked ${computerSelection}.`);
    computerPoints++;
  } else {
    alert(`It's a tie.`);
  }
  console.log(`${playerPoints} x ${computerPoints}`);
  if (playerPoints == 5) {
    endGame("player");
  } else if (computerPoints == 5) {
    endGame("computer");
  }
}

// endGame() is called when the game detects someone made 5 points, then remove the Listener for the choices buttons
function endGame(winner) {
  alert(`The ${winner} won the game.`);
  buttons.forEach((button) => {
    button.removeEventListener("click", handleClick);
  });
  buttonsBox.appendChild(restart);
  restart.textContent = "Play again?";
  restart.addEventListener("click", restartGame);
}

function restartGame() {
  playerPoints = 0;
  computerPoints = 0;
  buttonsBox.removeChild(restart);
  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}
