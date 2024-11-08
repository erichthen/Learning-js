const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const countLabel = document.getElementById("count-label");
let count = 0;

increaseButton.onclick = () => {
    count++;
    countLabel.textContent = count;
}

decreaseButton.onclick = () => {
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = () => {
    count = 0;
    countLabel.textContent = count;
}