'use strict';
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const number = document.querySelector(".number");


let secretNumber = Math.floor(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function() {
const guess = Number(document.querySelector(".guess").value);

if(!guess) {
    message.textContent = "Not number or 0 !";

} else if (guess === secretNumber) {
    message.textContent = "Correct !";
    currentScore ++;
    score.textContent = currentScore;
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.padding = "2rem 3.5rem";
    number.textContent = secretNumber;

    if(currentScore > highScore) {
        highScore = currentScore;
        document.querySelector(".highscore").textContent = highScore;
    }

} else if(guess != secretNumber) {
    if(currentScore > 1) {
        message.textContent = `${guess > secretNumber ? "Too high!" : "Too low!"}`;
        currentScore --;
        score.textContent = currentScore;
    } else {
        score.textContent = "0";
        currentScore = 0;
        message.textContent = "You loose the game";
    }

}
});

document.querySelector(".again").addEventListener("click", function() {
    message.textContent = "Start guessing...";
    secretNumber = Math.floor(Math.random() * 20) + 1;
    currentScore = 20;
    score.textContent = currentScore;
    number.textContent = "?"
    document.querySelector("body").style.backgroundColor = "#222";
    number.style.padding = "1.5rem 2.7rem";
});