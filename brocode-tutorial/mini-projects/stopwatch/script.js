
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const display = document.getElementById("display");


let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function startWatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateWatch, 10);
        isRunning = true;
    }
}

function stopWatch() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetWatch() {
    elapsedTime = 0;
    clearInterval(timer);
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function updateWatch() {
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime;

    let hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, "0");
    let minutes = String(Math.floor(elapsedTime / (1000 * 60) % 60)).padStart(2, "0");
    let seconds = String(Math.floor(elapsedTime / 1000 % 60)).padStart(2, "0");
    let milliseconds = String(Math.floor(elapsedTime % 1000 / 10)).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}



