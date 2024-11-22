
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
        timer = setInterval(updateWatch, 10)
    }
    console.log(startTime);
}

function stopWatch() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
    }
}

function resetWatch() {

}

function updateWatch() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}



