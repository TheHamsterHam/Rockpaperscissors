let playerScore = 0
let compScore = 0


//ComputerSelection
const computerplay = () => {
  const choices = ['rock', 'paper', 'scissor']
  const randomNum = Math.floor(Math.random()*3)
  const compChoice = choices[randomNum]
  return compChoice 
}

//rock
const playerRound = (playerSelection, ComputerSelection) => {
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

const playerSelection = 'rock'

const game = () => {
  for (let i = 0; i < 5; i++) {
    const ComputerSelection = computerplay(); 
    console.log(playerRound(playerSelection, ComputerSelection))
  }
}

game()