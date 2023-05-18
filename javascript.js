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

const rock = document.querySelector('.rock');
rock.addEventListener('click',playerRock);
const paper = document.querySelector('.paper');
paper.addEventListener('click',playerPaper);
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click',playerScissors);
let playerScore = 0;
let computerScore = 0;
result = document.querySelector('.result');

function playerRock() {
    getComputerChoice();
    const playerSelection = 'rock';
    console.log(playerSelection);
    console.log(computerSelection);
    if ((playerSelection === 'rock') && (computerSelection ==='paper')) {
        computerScore += 1;
    }
    else if ((playerSelection === 'rock') && (computerSelection ==='scissors')) {
        playerScore += 1;
    }
    console.log(playerScore);
    console.log(computerScore);
    result.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    Score();
}
function playerPaper() {
    getComputerChoice();
    const playerSelection = 'paper';
    console.log(playerSelection);
    console.log(computerSelection);
    if ((playerSelection === 'paper') && (computerSelection ==='rock')) {
        playerScore += 1;
    }
    else if ((playerSelection === 'paper') && (computerSelection ==='scissors')) {
        computerScore += 1;
    }
    console.log(playerScore);
    console.log(computerScore);
    result.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    Score();
}
function playerScissors() {
    getComputerChoice();
    const playerSelection = 'scissors';
    console.log(playerSelection);
    console.log(computerSelection);
    if ((playerSelection === 'scissors') && (computerSelection ==='rock')) {
        computerScore += 1;
    }
    else if ((playerSelection === 'scissors') && (computerSelection ==='paper')) {
        playerScore += 1;
    }
    console.log(playerScore);
    console.log(computerScore);
    result.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    Score();
}
function Score() {
    if (playerScore === 5) {
        result.textContent = `Player Win!!!`;
        playerScore = 0;
        computerScore = 0;
}
    else if (computerScore === 5) {
        result.textContent = `Computer Win!!!`;
        playerScore = 0;
        computerScore = 0;
}
}

