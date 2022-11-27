let choices = ["rock", "paper", "scissors"];

// GETTING USER INPUT
const userInput = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase(); 
    if(userInput ==="paper" || userInput ==="rock" || userInput ==="scissors"){
        console.log("You chose " + `${userInput}`);
    } else {
        console.log("Error! Try again!");
    }


    function getComputerChoice () {
        //1.get ramdom number script
        const randNum = Math.floor(Math,ramdom() * 3) + 1;
        //2.let computer pick one of those number
        //3.show result on console
    }