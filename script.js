let playerChoice = 0;
let computerScore = 0;
let roundWinner = ""; 

function getComputerChoice() {
   let randomNumb = Math.floor(Math.random() * 3)
   switch (randomNumb) {
    case 0:
        return 'ROCK'
    case 1:
        return "PAPER"
    case 2: 
        return "SCISSORS";
   }
}

function playerSelection() {

}

function playRound( playerSelection, getComputerChoice) {

}