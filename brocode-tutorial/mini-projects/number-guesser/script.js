
let beginButton = document.getElementById("begin-button");
let minInput = document.getElementById("min-input");
let maxInput = document.getElementById("max-input");
let attemptInput = document.getElementById("attempts-input");
let welcomeText = document.getElementById("welcome-text");
let min;
let max;

let instructionText = document.getElementById("instruction");
let guessInput = document.getElementById("guess-input");
let guessButton = document.getElementById("guess-button");

let attempts;
let number;
let result = document.getElementById("result");
let attemptsRemainingText = document.getElementById("attempts-remaining");

let correctNumber = document.getElementById("correct-number");
let playAgainButton = document.getElementById("play-again-button");

beginButton.onclick = () => {
    min = parseInt(minInput.value);
    max = parseInt(maxInput.value);
    attempts = parseInt(attemptInput.value);

    if (isNaN(min) || isNaN(max) || isNaN(attempts) || min >= max || min < 0 || max < 0) {
        alert('Error: Invalid input');
        return;
    }

    number = Math.floor(Math.random() * (max - min + 1)) + min;

    beginButton.style.display = "none";
    welcomeText.style.display = "none";
    minInput.style.display = "none";
    maxInput.style.display = "none";
    attemptInput.style.display = "none";
    document.getElementById("game-container").style.display = "block";

    instructionText.textContent = `Pick a number from ${min} to ${max}`;
    instructionText.style.display = "block";
    guessInput.style.display = "block";
    guessButton.style.display = "block";
}

guessButton.onclick = () => {
    if (attempts <= 0) {
        return;
    }

    result.style.display = "block";
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        result.textContent = "Not a valid guess!";
        attempts --; 
    }
    else if (guess < number) {
        result.textContent = "Too low!";
        attempts --;
    }
    else if (guess > number) {
        result.textContent = "Too high!"
        attempts --;
    }
    else if (guess === number) {
        result.textContent = "You got it!";
        attemptsRemainingText.style.display = "none";
        guessButton.style.display = "none";
        playAgainButton.style.display = "block"; 
        guessButton.style.display = "none";
    }

    if (number !== guess && attempts === 0) {
        result.textContent = "You lost! The number was..."
        correctNumber.style.display = "block";
        correctNumber.textContent = `${number}`;
        attemptsRemainingText.style.display = "none";
        guessButton.style.display = "none";
        playAgainButton.style.display = "block";
    }
    else {
        attemptsRemainingText.style.display = "inline";
        attemptsRemainingText.textContent = `Attempts Remaining: ${attempts}`;
    }
}

playAgainButton.onclick = () => {
    instructionText.style.display = "none";
    guessInput.style.display = "none";
    result.style.display = "none";
    correctNumber.style.display = "none";
    playAgainButton.style.display = "none";

    welcomeText.style.display = "inline";
    minInput.style.display = "inline";
    minInput.value = "";
    maxInput.style.display = "inline";
    maxInput.value = "";
    attemptInput.style.display = "inline";
    attemptInput.value = "";
    beginButton.style.display = "inline";
}
