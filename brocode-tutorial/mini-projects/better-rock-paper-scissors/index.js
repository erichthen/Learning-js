

const playButton = document.getElementById("playgame");
const computerChoiceDiv = document.getElementById("computer-choice-circle");
const computerChoiceSpan = document.getElementById("computer-choice-span");
const computerMessage = document.getElementById("computer-message");
const resultHeader = document.getElementById("result-message");
const userScoreMessage = document.getElementById("user-score");
const computerScoreMessage = document.getElementById("computer-score");
const playAgainMessage = document.getElementById("play-again-message");
let computerScore = 0;
let userScore = 0;
let selectedChoice = "";

function highlightUserSelection(buttonId) {
    const choiceButtons = document.querySelectorAll(".player-choices-container button");
    choiceButtons.forEach(button => button.classList.remove("selected"));
    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add("selected");
    selectedChoice = selectedButton.textContent;

    //show the play button as well
    playButton.style.display = "block";

}

playButton.addEventListener("click", () => {
    const choices = ["🪨", "📄", "✂️"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    computerChoiceSpan.textContent = computerChoice;
    computerMessage.style.display = "block";
    computerChoiceDiv.style.display = "block";
    console.log(selectedChoice);

    switch(selectedChoice.trim()) {
        case "🪨":
            if (computerChoice === "🪨") {
                resultHeader.style.display = "block";
                resultHeader.textContent = "It's a draw!";
            }
            else if (computerChoice === "📄") {
                computerScore ++;
                resultHeader.textContent = "You lost!";
                resultHeader.style.display = "block";
                computerScoreMessage.textContent = `Computer score: ${computerScore}`;
            }
            else {
                userScore ++;
                resultHeader.textContent = "You won!";
                resultHeader.style.display = "block";
                userScoreMessage.textContent = `Your score: ${userScore}`;
            }
            break;

        case "📄":
            if (computerChoice === "📄") {
                resultHeader.style.display = "block";
                resultHeader.textContent = "It's a draw!";
            }
            else if (computerChoice === "✂️") {
                computerScore ++;
                resultHeader.textContent = "You lost!";
                resultHeader.style.display = "block";
                computerScoreMessage.textContent = `Computer score: ${computerScore}`;
            }
            else {
                userScore ++;
                resultHeader.textContent = "You won!";
                resultHeader.style.display = "block";
                userScoreMessage.textContent = `Your score: ${userScore}`;
            }
            break;

        case "✂️":
            if (computerChoice === "✂️") {
                resultHeader.style.display = "block";
                resultHeader.textContent = "It's a draw!";
            }
            else if (computerChoice === "🪨") {
                computerScore ++;
                resultHeader.textContent = "You lost!";
                resultHeader.style.display = "block";
                computerScoreMessage.textContent = `Computer score: ${computerScore}`;
            }
            else {
                userScore ++;
                resultHeader.textContent = "You won!";
                resultHeader.style.display = "block";
                userScoreMessage.textContent = `Your score: ${userScore}`;
            }
            break;
    }
    playAgainMessage.style.display = "block";
});

