let playerScore = 0
let compScore = 0
const rockButton = document.querySelector('.rockbt')
const paperButton = document.querySelector('.paperbt')
const scissorsButton = document.querySelector('.scissorsbt')
const outcomeDiv = document.querySelector('.outcome')


//ComputerSelection
const computerplay = () => {
  const choices = ['rock', 'paper', 'scissor']
  const randomNum = Math.floor(Math.random() * choices.length)
  return choices[randomNum]
}

//rock
const playRound = (playerSelection, ComputerSelection) => {
if (playerSelection === 'rock' && ComputerSelection === 'paper') {
  const p = document.createElement('p')
  p.innerText = 'You lose! Rock beats Paper'
  outcomeDiv.appendChild(p)
    //score for computer add one (+1)
    //compScore++
  } else if (playerSelection === 'rock' && ComputerSelection === 'scissor') {
    const p = document.createElement('p')
    p.innerText = 'You win! Scissor beats Paper'
    outcomeDiv.appendChild(p)
    //score for player add one (+1)
    //playerScore++
  } else if (playerSelection === 'rock' && ComputerSelection === 'rock') {
    const p = document.createElement('p')
    p.innerText = 'It is a tie!'
    outcomeDiv.appendChild(p)
//paper
  } else if (playerSelection === 'paper' && ComputerSelection === 'rock') {
    const p = document.createElement('p')
    p.innerText = 'You win! Paper beats Rock'
    outcomeDiv.appendChild(p)
    //score for player add one (+1)
    //playerScore++
  } else if (playerSelection === 'paper' && ComputerSelection === 'scissor') {
    const p = document.createElement('p')
    p.innerText = 'You lose! Scissor beats Paper'
    outcomeDiv.appendChild(p)
    //score for computer add one (+1)
    //compScore++
  } else if (playerSelection === 'paper' && ComputerSelection === 'paper') {
    const p = document.createElement('p')
    p.innerText = 'It is a tie!'
    outcomeDiv.appendChild(p)
//scissor
  } else if (playerSelection === 'scissor' && ComputerSelection === 'rock') {
    const p = document.createElement('p')
    p.innerText = 'You lose! Rock beats Scissor'
    outcomeDiv.appendChild(p)
    //score for computer add one (+1)
    //compScore++
  } else if (playerSelection === 'scissor' && ComputerSelection === 'paper') {
    const p = document.createElement('p')
    cp.innerText = 'You win! Scissor beats Paper'
    outcomeDiv.appendChild(p)
    //score for player add one (+1)
    //playerScore++
  } else if (playerSelection === 'scissor' && ComputerSelection === 'scissor') {
    const p = document.createElement('p')
    p.innerText = 'It is a tie!'
    outcomeDiv.appendChild(p)
  }
}

rockButton.addEventListener('click', () => {
  const ComputerSelection = computerplay()
  const playerSelection = 'rock'
  playRound(playerSelection, ComputerSelection)
})

paperButton.addEventListener('click', () => {
  const ComputerSelection = computerplay()
  const playerSelection = 'paper'
  playRound(playerSelection, ComputerSelection)
})

scissorsButton.addEventListener('click', () => {
  const ComputerSelection = computerplay()
  const playerSelection = 'scissors'
  playRound(playerSelection, ComputerSelection)
})



//const playerSelection = 'rock'

//const game = () => {
  //for (let i = 0; i < 5; i++) {
    //const playerSelection = prompt('Do you choose rock, paper, or scissor?', 'Type your choice').toLocaleLowerCase();
  //if (playerSelection ==="paper" || playerSelection ==="rock" || playerSelection ==="scissor") {
      //console.log("You choose " + `${playerSelection}`);
  //} else console.log("Error! Please choose rock, paper, or scissor"); 
    //const ComputerSelection = computerplay(); 
    //playerRound(playerSelection, ComputerSelection)
 // }

  //if (playerScore > compScore) {
 //   return 'You have won the game!'
 // } else if (playerScore < compScore) {
 //     return 'The computer won the game!'
 // } else {
  //  return 'It is a tie!'
  //}
//}

//console.log(game())