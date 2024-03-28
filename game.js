const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let choices = ["rock", "paper", "scissors"]
let userChoice; 

function compChoice(choice){
    const compChoose = Math.floor(Math.random()*choices.length)
    
    const result = choice[compChoose]
    console.log(result)
    return result;

}


const comp = compChoice(choices)
rock.addEventListener("click", function() {
    userChoice = "rock";
    console.log(userChoice);
});
paper.addEventListener("click", function() {
    userChoice = "paper";
    console.log(userChoice);
});
scissors.addEventListener("click", function() {
    userChoice = "scissors";
    console.log(userChoice);
});
