let numberOfDiceInput = document.getElementById("number-of-dice");
let rollButton = document.getElementById("roll-button");
let invalidMessage = document.getElementById("invalid");
let imagesDiv = document.getElementById("dice-images");

let images = [
    "images/face_one.png",
    "images/face_two.png",
    "images/face_three.png",
    "images/face_four.png",
    "images/face_five.png",
    "images/face_six.png"
];

rollButton.onclick = () => {

    imagesDiv.innerHTML = "";

    let numberOfDice = parseInt(numberOfDiceInput.value);
    if (isNaN(numberOfDice) || numberOfDice <= 0) {
        invalidMessage.textContent = "Invalid input";
    }
    else {
        invalidMessage.textContent = "";
    }

    let results = [];
    for (let i = 0; i < numberOfDice; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        results.push(roll);
    }

    for (let i = 0; i < results.length; i++) {
        let image = document.createElement("img");
        image.src = images[results[i] - 1];
        imagesDiv.appendChild(image);
    }
}
