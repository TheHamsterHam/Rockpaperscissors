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
    //score for computer add one (+1)
    compScore++
  } else if (playerSelection === 'rock' && ComputerSelection === 'scissor') {
    console.log('You win! Scissor beats Paper');
    //score for player add one (+1)
    playerScore++
  } else if (playerSelection === 'rock' && ComputerSelection === 'rock') {
    console.log('It is a tie!');
//paper
  } else if (playerSelection === 'paper' && ComputerSelection === 'rock') {
    console.log('You win! Paper beats Rock');
    //score for player add one (+1)
    playerScore++
  } else if (playerSelection === 'paper' && ComputerSelection === 'scissor') {
    console.log('You lose! Scissor beats Paper');
    //score for computer add one (+1)
    compScore++
  } else if (playerSelection === 'paper' && ComputerSelection === 'paper') {
    console.log('It is a tie!');
//scissor
  } else if (playerSelection === 'scissor' && ComputerSelection === 'rock') {
    console.log('You lose! Rock beats Scissor');
    //score for computer add one (+1)
    compScore++
  } else if (playerSelection === 'scissor' && ComputerSelection === 'paper') {
    console.log('You win! Scissor beats Paper');
    //score for player add one (+1)
    playerScore++
  } else if (playerSelection === 'scissor' && ComputerSelection === 'scissor') {
    console.log('It is a tie!');
  }
}

const playerSelection = 'rock'

const game = () => {
  for (let i = 0; i < 5; i++) {
    const ComputerSelection = computerplay(); 
    playerRound(playerSelection, ComputerSelection)
  }

  if (playerScore > compScore) {
    return 'You have won the game!'
  } else if (playerScore < compScore) {
      return 'The computer won the game!'
  } else {
    return 'You tie!'
  }
}

console.log(game())