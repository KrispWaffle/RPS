const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playagainB = document.getElementById("playagain");
let choices = ["rock", "paper", "scissors"]
let userChoice; 

function compChoice(choice){
    const compChoose = Math.floor(Math.random()*choices.length)
    
    const result = choice[compChoose]
   
    return result;

}


function disableImages() {
    rock.removeEventListener("click", rockClickHandler);
    paper.removeEventListener("click", paperClickHandler);
    scissors.removeEventListener("click", scissorsClickHandler);
}
function enableImages() {
    rock.addEventListener("click", rockClickHandler);
    paper.addEventListener("click", paperClickHandler);
    scissors.addEventListener("click", scissorsClickHandler);
}
const comp = compChoice(choices)
console.log(comp)


function play(){
    disableImages();

    if(userChoice == "rock" && comp == "scissors" || userChoice == "paper" && comp == "rock" || userChoice == "scissors" && comp =="paper"){
             document.getElementById("winoL").textContent = "You Won"
             document.getElementById("playagain").style.display = "block";
        }else if (userChoice == comp) {
             document.getElementById("winoL").textContent = "tied"
             document.getElementById("playagain").style.display = "block";
            } else {
                document.getElementById("winoL").textContent = "You Lost";
                document.getElementById("playagain").style.display = "block";
           
            }
            
}

playagainB.addEventListener("click", function(){
    console.log("worked")
    document.getElementById("winoL").textContent = " ";
    document.getElementById("playagain").style.display = "none";
    enableImages();
    play();
})

function rockClickHandler() {
    userChoice = "rock";
    choiceMade = true;
    play();
}

function paperClickHandler() {
    userChoice = "paper";
    choiceMade = true;
    play();
}

function scissorsClickHandler() {
    userChoice = "scissors";
    choiceMade = true;
    play();
}

rock.addEventListener("click", rockClickHandler);
paper.addEventListener("click", paperClickHandler);
scissors.addEventListener("click", scissorsClickHandler);
enableImages();