
let tempInput = document.getElementById("textInput");
let toFarInput = document.getElementById("toFar");
let toCelInput = document.getElementById("toCel");
let submitButton = document.getElementById("submitButton");
let resultText = document.getElementById("result");
let convertedTemp;
let unit;

submitButton.onclick = () => {
    convert();
}

function convert() {

    let temp = tempInput.value.trim();
    if (isNaN(temp) || temp === "") {
        resultText.style.color = "red";
        resultText.textContent = `Invalid input`;
        resultText.style.display = "inline";
        return;
    }
    temp = Number(temp);

    if (toFarInput.checked) {
        unit = "°F"
        convertedTemp = toFaren(temp).toFixed(3)

        if (convertedTemp >= 85) {
            resultText.style.color = "red";
        }
        else if (convertedTemp >= 35) {
            resultText.style.color = "green";
        }
        else {
            resultText.style.color = "blue";
        }

        resultText.style.display = "inline";
        resultText.textContent = `${convertedTemp} ${unit}`;
    }
    else if (toCelInput.checked) {
        unit = "°C"
        convertedTemp = toCels(temp).toFixed(3)

        if (convertedTemp >= 29.4) {
            resultText.style.color = "red";
        }
        else if (convertedTemp >= 7.2) {
            resultText.style.color = "green";
        }
        else {
            resultText.style.color = "blue";
        }
        
        resultText.style.display = "inline";
        resultText.textContent = `${convertedTemp} ${unit}`;
    }
    else {
        resultText.style.display = "inline";
        resultText.textContent = `Please select a conversion`;
    }
}

function toCels(temp) {
    return (temp - 32) * (5 / 9);
}

function toFaren(temp) {
    return temp * (9 / 5) + 32;
}
