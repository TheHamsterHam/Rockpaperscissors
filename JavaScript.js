const choices = ["rock", "paper", "scissor"];

// ask user 
const playerSelection = prompt("Do you choose rock, paper, or scissor?").toLocaleLowerCase(); 
    if(playerSelection ==="paper" || playerSelection ==="rock" || playerSelection ==="scissor"){
        console.log("You chose " + `${playerSelection}`);
    } else {
        console.log("Error! Please choice rock, paper, or scissor");
    }


//getComputerChoice
let getComputerChoice = choices[Math.floor(Math.random()*3)];
console.log("Computer chose" + ` ${getComputerChoice}`);

//winner and loser
const winner = declareWinner(playerSelection, getComputerChoice);

function declareWinner(playerSelection, getComputerChoice) {
  if (playerSelection === 'rock' && getComputerChoice === 'paper') {
    console.log('You lose! Rock beats Paper');
  } else if (playerSelection === 'scissor' && getComputerChoice === 'paper') {
    console.log('You win! Scissor beats Paper');
  } else {
    console.log('You tie!');
  }
}