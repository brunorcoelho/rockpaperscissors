const array = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;
const buttonsBox = document.querySelector(".buttons-container");
const gameInfo = document.querySelector(".game-info");
const roundWinner = document.createElement("p");
const score = document.createElement("p");
const gameWinner = document.createElement("p");
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
  gameInfo.appendChild(roundWinner);
  gameInfo.appendChild(score);
  let round = playRound(playerSelection, computerSelection);
  if (round == "PLAYER") {
    roundWinner.textContent = `Player wins the round. The computer picked ${computerSelection}.`;
    playerPoints++;
  } else if (round == "COMPUTER") {
    roundWinner.textContent = `Computer wins the round. The computer picked ${computerSelection}.`;
    computerPoints++;
  } else {
    roundWinner.textContent = `It's a tie.`;
  }
  score.textContent = `${playerPoints} x ${computerPoints}`;
  if (playerPoints == 5) {
    endGame("player");
  } else if (computerPoints == 5) {
    endGame("computer");
  }
}

// endGame() is called when the game detects someone made 5 points, then remove the Listener for the choices buttons
function endGame(winner) {
  gameInfo.appendChild(gameWinner);
  gameWinner.textContent = `The ${winner} won the game.`;
  buttons.forEach((button) => {
    button.removeEventListener("click", handleClick);
  });
  buttonsBox.appendChild(restart);
  restart.textContent = "Play again?";
  restart.addEventListener("click", restartGame);
}

// When the player clicks "Play Again?" the game resets the score, remove previous game info, and make the buttons listen again to play a new game.
function restartGame() {
  playerPoints = 0;
  computerPoints = 0;
  buttonsBox.removeChild(restart);
  gameInfo.removeChild(roundWinner);
  gameInfo.removeChild(score);
  gameInfo.removeChild(gameWinner);
  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}
