const array = ["Rock", "Paper", "Scissors"]
// Make the random computer pick
function computerPlay() {
    return array[Math.floor(Math.random()* array.length)]
}
let computerPick = computerPlay()
console.log(`The computer picked ${computerPick}`)

