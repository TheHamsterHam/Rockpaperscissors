let playerScore = 0
let getComputerScore = 0
const choices = ["rock", "paper", "scissor"];

// ask user 
const playerSelection = prompt("Do you choose rock, paper, or scissor?").toLocaleLowerCase(); 
    if(playerSelection ==="paper" || playerSelection ==="rock" || playerSelection ==="scissor"){
        console.log("You chose " + `${playerSelection}`);
    } else {
        console.log("Error! Please choose rock, paper, or scissor");
    }


//ComputerSelection
let ComputerSelection = choices[Math.floor(Math.random()*3)];
console.log("Computer chose" + ` ${ComputerSelection}`);

//winner and loser
const winner = declareWinner(playerSelection, ComputerSelection);

//rock
function declareWinner(playerSelection, ComputerSelection) {
if (playerSelection === 'rock' && ComputerSelection === 'paper') {
    console.log('You lose! Rock beats Paper');
  } else if (playerSelection === 'rock' && ComputerSelection === 'scissor') {
    console.log('You win! Scissor beats Paper');
  } else if (playerSelection === 'rock' && ComputerSelection === 'rock') {
    console.log('It is a tie!');
//paper
  } else if (playerSelection === 'paper' && ComputerSelection === 'rock') {
    console.log('You win! Paper beats Rock');
  } else if (playerSelection === 'paper' && ComputerSelection === 'scissor') {
    console.log('You lose! Scissor beats Paper');
  } else if (playerSelection === 'paper' && ComputerSelection === 'paper') {
    console.log('It is a tie!');
//scissor
  } else if (playerSelection === 'scissor' && ComputerSelection === 'rock') {
    console.log('You lose! Rock beats Scissor');
  } else if (playerSelection === 'scissor' && ComputerSelection === 'paper') {
    console.log('You win! Scissor beats Paper');
  } else if (playerSelection === 'scissor' && ComputerSelection === 'scissor') {
    console.log('It is a tie!');
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    const getComputerScore = computerPlay()
    console.log(playerSelection, ComputerSelection) 
  }
}

