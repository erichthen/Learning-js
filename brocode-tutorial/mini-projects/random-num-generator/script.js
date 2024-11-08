


document.getElementById("generate").onclick = () => {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let random = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("random-number").textContent = random;
}