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

function getPlayerChoice() {
    let choiceTextPlayer = prompt('Chose Rock, Paper or Scissors?');
    playerSelection=choiceTextPlayer.toLowerCase();
    return playerSelection;
}

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

function game() {
    let playScore = 0;
    let computerScore = 0;
    for (let i=1;i<=5;i++) {
        let player = getPlayerChoice();
        let computer = getComputerChoice();
        let game = playRound(playerSelection,computerSelection);
        if (game === 'You win') {
            playScore++;
        }
        else if (game === 'You lose') {
            computerScore++;
        }
        console.log(player);
        console.log(computer);
    }
    console.log(playScore);
    console.log(computerScore);
    if (playScore>computerScore) {
        return 'You win all';
    }
    else if (playScore<computerScore) {
        return 'You lose all';
    }
    else {
        return 'You draw all';
    }
}
console.log(game());