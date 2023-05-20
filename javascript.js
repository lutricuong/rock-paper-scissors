let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');
rock.addEventListener('click',playerChooseRock);
paper.addEventListener('click',playerChoosePaper);
scissors.addEventListener('click',playerChooseScissors);

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

function rockPaperScissors() {
    if ((playerSelection === 'rock') && (computerSelection ==='paper')) {
        computerScore += 1;
    }
    else if ((playerSelection === 'rock') && (computerSelection ==='scissors')) {
        playerScore += 1;
    }
    if ((playerSelection === 'paper') && (computerSelection ==='rock')) {
        playerScore += 1;
    }
    else if ((playerSelection === 'paper') && (computerSelection ==='scissors')) {
        computerScore += 1;
    }
    if ((playerSelection === 'scissors') && (computerSelection ==='rock')) {
        computerScore += 1;
    }
    else if ((playerSelection === 'scissors') && (computerSelection ==='paper')) {
        playerScore += 1;
    }
}

function resetScore() {
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

function playerChooseRock() {
    playerSelection = 'rock';
    getComputerChoice();
    rockPaperScissors();
    result.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    resetScore();
}

function playerChoosePaper() {
    playerSelection = 'paper';
    getComputerChoice();
    rockPaperScissors();
    result.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    resetScore();
}

function playerChooseScissors() {
    playerSelection = 'scissors';
    getComputerChoice();
    rockPaperScissors();
    result.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    resetScore();
}


