const displaySpan = document.getElementById("display-span");

function addToDisplay(string) {
    displaySpan.textContent += string;
}

function clearAll() {
    displaySpan.textContent = "";
}

function clearLast() {
    displaySpan.textContent = displaySpan.textContent.slice(0, displaySpan.textContent.length - 1);
}

function calculate() {
    const answer = eval(displaySpan.textContent);
    displaySpan.textContent = answer;
}