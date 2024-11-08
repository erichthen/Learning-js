const pi = 3.14159;

document.getElementById("submit").onclick = () => {

    let radius = document.getElementById("radius-input").value;
    let circumference = 2 * pi * radius;
    if (radius === "" || radius === null) {
        document.getElementById("result").textContent = `Radius is invalid`;
    }
    else {
        document.getElementById("result").innerHTML = `The circumference of a circle with radius ${radius} is <strong>${circumference}<strong>`;
    }

    document.getElementById("radius-input-label").style.display = "none";
    document.getElementById("radius-input").style.display = "none";
    document.getElementById("result").style.display = "inline";  
    document.getElementById("submit-another").style.display = "inline";
    document.getElementById("submit").style.display = "none";
}

document.getElementById("submit-another").onclick = () => {
    document.getElementById("radius-input-label").style.display = "inline";
    document.getElementById("radius-input").style.display = "inline";
    document.getElementById("radius-input").value = "";
    document.getElementById("submit-another").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("submit").style.display = "inline";
}



