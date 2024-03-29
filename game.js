const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let choices = ["rock", "paper", "scissors"]
let userChoice; 

function compChoice(choice){
    const compChoose = Math.floor(Math.random()*choices.length)
    
    const result = choice[compChoose]
   
    return result;

}

rock.addEventListener("click", function rockclick() {
    userChoice = "rock";
    console.log(userChoice);
    play()
});
paper.addEventListener("click", function paperclick() {
    userChoice = "paper";
    console.log(userChoice);
    play()
});
scissors.addEventListener("click",  function scissorsclick() {
    userChoice = "scissors";
    console.log(userChoice);
    play()
    
});


function disable() {
    rock.removeEventListener("click", rockclick);
    paper.removeEventListener("click", paperclick);
    scissors.removeEventListener("click", scissorsclick);
}

const comp = compChoice(choices)
console.log(comp)


function play(){
    disable();

    if(userChoice == "rock" && comp == "scissors" || userChoice == "paper" && comp == "rock" || userChoice == "scissors" && comp =="paper"){
             document.getElementById("winoL").textContent = "You Won"
        }else if (userChoice == comp) {
             document.getElementById("winoL").textContent = "tied"
            } else {
                document.getElementById("winoL").textContent = "You Lost";
                
            }
            
}



