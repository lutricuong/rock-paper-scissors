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
        return `Player chose ${playerSelection}, Computer chose ${computerSelection}. You draw!`;
    }
    else if ((playerSelection === 'rock') && (computerSelection ==='paper')) {
        return `You lose`;
    }
    else if ((playerSelection === 'rock') && (computerSelection ==='scissors')) {
        return `You win`;
    }
    else if ((playerSelection === 'paper') && (computerSelection ==='rock')) {
        return `You win`;
    }
    else if ((playerSelection === 'paper') && (computerSelection ==='scissors')) {
        return `You lose`;
    }
    else if ((playerSelection === 'scissors') && (computerSelection ==='paper')) {
        return `You win`;
    }
    else if ((playerSelection === 'scissors') && (computerSelection ==='rock')) {
        return `You lose`;
    }
    else {
        return 'You enter the wrong selection';
    }
}
console.log(playRound(playerSelection,computerSelection));


