let playerSelection;
let computerSelection;
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        computerSelection = 'rock';
    }
    else if (randomNumber === 1) {
        computerSelection = 'paper';
    }
    else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}
console.log(getComputerChoice());

function getPlayerChoice() {
    let choiceTextPlayer = prompt('Chose Rock, Paper or Scissors?');
    playerSelection=choiceTextPlayer.toLowerCase();
    return playerSelection;
}
console.log(getPlayerChoice());

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Player chose ${playerSelection}, Computer chose ${computerSelection}. You draw!`);
    }
    else if ((playerSelection === 'rock') && (computerSelection ==='paper')) {
        console.log(`You lose`);
    }
    else if ((playerSelection === 'rock') && (computerSelection ==='scissors')) {
        console.log(`You win`);
    }
    else if ((playerSelection === 'paper') && (computerSelection ==='rock')) {
        console.log(`You win`);
    }
    else if ((playerSelection === 'paper') && (computerSelection ==='scissors')) {
        console.log(`You lose`);
    }
    else if ((playerSelection === 'scissors') && (computerSelection ==='paper')) {
        console.log(`You win`);
    }
    else if ((playerSelection === 'scissors') && (computerSelection ==='rock')) {
        console.log(`You lose`);
    }

}


