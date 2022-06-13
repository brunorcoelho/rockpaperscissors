const array = ["ROCK", "PAPER", "SCISSORS"]

// Make the random computer pick
function computerPlay() {
    return array[Math.floor(Math.random()* array.length)]
}

// Round function
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    if ((playerSelection == "PAPER") && (computerSelection == "ROCK")) {
        return("The player won.")
    }
    else if ((playerSelection == "PAPER") && (computerSelection == "SCISSORS")) {
        return("The computer won.")
    }
    else if ((playerSelection == "ROCK") && (computerSelection == "PAPER")) {
        return("The computer won.")
    }
    else if ((playerSelection == "ROCK") && (computerSelection == "SCISSORS")) {
        return("The player won.")
    }
    else if ((playerSelection == "SCISSORS") && (computerSelection == "ROCK")) {
        return("The computer won.")
    }
    else if ((playerSelection == "SCISSORS") && (computerSelection == "PAPER")) {
        return("The player won.")
    }
    else {
        return("It's a tie.")
    }
}

//Game function
function game() {
    let playerPoints = 0 
    let computerPoints = 0
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay()
        const playerSelection = "Paper"
        let round = playRound(playerSelection, computerSelection);
        if (round == "The player won.") {
            playerPoints = playerPoints + 1
        }        
        else if (round == "The computer won.") {
            computerPoints = computerPoints + 1
        }
        
}
    if (playerPoints > computerPoints) {
        return(`The player won the game. ${playerPoints} x ${computerPoints}`)
    }
    else if (playerPoints < computerPoints) {
        return(`The computer won the game. ${playerPoints} x ${computerPoints}`)
    }
    else {
        return("It's a tie!")
    }


}
console.log(game())
