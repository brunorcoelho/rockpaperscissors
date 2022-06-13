const array = ["ROCK", "PAPER", "SCISSORS"]

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

    if (
        (playerSelection == "PAPER") && (computerSelection == "ROCK") || 
        (playerSelection == "ROCK") && (computerSelection == "SCISSORS") || 
        (playerSelection == "SCISSORS") && (computerSelection == "PAPER")
        ) {
        return("The player won.")
    }

    else if (
        (playerSelection == "PAPER") && (computerSelection == "SCISSORS") ||
        (playerSelection == "ROCK") && (computerSelection == "PAPER") || 
        (playerSelection == "SCISSORS") && (computerSelection == "ROCK")
        ) {
        return("The computer won.")
    }

    else {
        return("It's a tie.")
    }
}

// Game function
function game() {
    let playerPoints = 0 
    let computerPoints = 0
    // Loops the game function for 5 rounds, display each round winner and adds a point to the winner
    for (let i = 1; i < 6; i++) {
        const computerSelection = computerPlay()
        const playerSelection = prompt("What is your selection? (Rock, Paper, Scissors)")
        let round = playRound(playerSelection, computerSelection);
        if (round == "The player won.") {
            playerPoints = playerPoints + 1
            console.log(`Round ${i}: Player wins
        The computer picked ${computerSelection}.`)
        }        
        else if (round == "The computer won.") {
            computerPoints = computerPoints + 1
            console.log(`Round ${i}: Computer wins
        The computer picked ${computerSelection}.`)
        }
        else if (round == "Invalid selection.") {
            alert("Try again. Select one of the displayed options.")
            return
        }
        else 
            console.log(`Round ${i}: Tie`)
    }
        
    // Checks the game winner
    if (playerPoints > computerPoints) {
        return(`The player won the game. ${playerPoints} x ${computerPoints}`)
    }
    else if (playerPoints < computerPoints) {
        return(`The computer won the game. ${playerPoints} x ${computerPoints}`)
    }
    else {
        return(`It's a tie! ${playerPoints} x ${computerPoints}`)


}
}
console.log(game())
