const array = ["rock", "paper", "scissors"]

// Make the random computer pick
function computerPlay() {
    return array[Math.floor(Math.random()* array.length)]
}

// Round function
function playRound(playerSelection, computerSelection) {

    // Checks if player picked an invalid option
    if ((playerSelection === null) || (playerSelection.toUpperCase() !=("ROCK") && playerSelection.toUpperCase() !=("PAPER") && playerSelection.toUpperCase() !=("SCISSORS"))){
        return("Invalid selection.")
    }
    // Makes the player selection uppercase to proceed to comparison
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (
        (playerSelection == "PAPER") && (computerSelection == "ROCK") || 
        (playerSelection == "ROCK") && (computerSelection == "SCISSORS") || 
        (playerSelection == "SCISSORS") && (computerSelection == "PAPER")
        ) {
        return("PLAYER")
    }

    else if (
        (playerSelection == "PAPER") && (computerSelection == "SCISSORS") ||
        (playerSelection == "ROCK") && (computerSelection == "PAPER") || 
        (playerSelection == "SCISSORS") && (computerSelection == "ROCK")
        ) {
        return("COMPUTER")
    }

    else {
        return("It's a tie.")
    }
}

// Game function
function game() {
    let playerPoints = 0 
    let computerPoints = 0
        const computerSelection = computerPlay()
        const playerSelection = prompt("What is your selection? (rock, paper, scissors)")
        let round = playRound(playerSelection, computerSelection);
        if (round == "PLAYER") {
            playerPoints = playerPoints + 1
            alert(`Player wins.\nThe computer picked ${computerSelection}.`)
        }        
        else if (round == "COMPUTER") {
            computerPoints = computerPoints + 1
            alert(`Computer wins.\nThe computer picked ${computerSelection}.`)
        }
        else if (round == "Invalid selection.") {
            alert("Try again. Select one of the displayed options.")
            return
        }
        else 
            alert(`It's a tie.`)
        
    // Checks the game winner
    if (playerPoints > computerPoints) {
        alert(`The player won the game. ${playerPoints} x ${computerPoints}`)
    }
    else if (playerPoints < computerPoints) {
        alert(`The computer won the game. ${playerPoints} x ${computerPoints}`)
    }
    else {
        alert(`It's a tie! ${playerPoints} x ${computerPoints}`)


}
}
game()
