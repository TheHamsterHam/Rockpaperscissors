const choices = ["rock", "paper", "scissor"];

// ask user 
const playerSelection = prompt("Do you choose rock, paper, or scissor?").toLocaleLowerCase(); 
    if(playerSelection ==="paper" || playerSelection ==="rock" || playerSelection ==="scissor"){
        console.log("You chose " + `${playerSelection}`);
    } else {
        console.log("Error! Please choose rock, paper, or scissor");
    }


//getComputerChoice
let getComputerChoice = choices[Math.floor(Math.random()*3)];
console.log("Computer chose" + ` ${getComputerChoice}`);

//winner and loser
const winner = declareWinner(playerSelection, getComputerChoice);

//rock
function declareWinner(playerSelection, getComputerChoice) {
if (playerSelection === 'rock' && getComputerChoice === 'paper') {
    console.log('You lose! Rock beats Paper');
  } else if (playerSelection === 'rock' && getComputerChoice === 'scissor') {
    console.log('You win! Scissor beats Paper');
  } else if (playerSelection === 'rock' && getComputerChoice === 'rock') {
    console.log('It is a tie!');
//paper
  } else if (playerSelection === 'paper' && getComputerChoice === 'rock') {
    console.log('You win! Paper beats Rock');
  } else if (playerSelection === 'paper' && getComputerChoice === 'scissor') {
    console.log('You lose! Scissor beats Paper');
  } else if (playerSelection === 'paper' && getComputerChoice === 'paper') {
    console.log('It is a tie!');
//scissor
  } else if (playerSelection === 'scissor' && getComputerChoice === 'rock') {
    console.log('You lose! Rock beats Scissor');
  } else if (playerSelection === 'scissor' && getComputerChoice === 'paper') {
    console.log('You win! Scissor beats Paper');
  } else if (playerSelection === 'scissor' && getComputerChoice === 'scissor') {
    console.log('It is a tie!');
  }
}

