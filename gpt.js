const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let choices = ["rock", "paper", "scissors"];
let userChoice;
let compChoice;
let choiceMade = false;

function compChoose() {
    return choices[Math.floor(Math.random() * choices.length)];
}



function play() {
    compChoice = compChoose();
    disableImages();

    if (userChoice === compChoice) {
        document.getElementById("winoL").textContent = "Tied";
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        document.getElementById("winoL").textContent = "You Won";
    } else {
        document.getElementById("winoL").textContent = "You Lost";
    }
}

