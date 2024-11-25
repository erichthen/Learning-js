//the dom is theoretical, no html script associated

// event listner = Listen for specifc events to create interactive 
//                 web pages

//common key events: 

// •keydown: Triggered when a key is pressed down.
// •keyup: Triggered when a key is released.
// •keypress: Triggered when a key is pressed (deprecated, use keydown or keyup instead).

//keypress is not compatiable with all web browsers, so avoid it


document.addEventListener("keydown", event => {
    console.log(`The key that was pressed is: ${event.key}`);
});

document.addEventListener("keyup", event => {
    console.log(`The key that was released is: ${event.key}`);
});


//HTML we are working with

// <body>
//       <div id="myBox">🙀</div>
// </body>

const myBox = document.createElement("div");
myBox.id = "myBox";
myBox.textContent = "🙀";
document.body.appendChild(myBox);

//add some styling 
myBox.style.backgroundColor = "lightblue";
myBox.style.width = "200px";
myBox.style.height = "200px";
myBox.style.display = "flex";
myBox.style.justifyContent = "center";
myBox.style.alignItems = "center";
myBox.style.position = "relative";
document.body.style.margin = "0";

//lets change the text content of the box when we press a key down
//and revert it when we release the key

document.addEventListener("keydown", event => {
    myBox.textContent = "😁";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "🙀";
    myBox.style.backgroundColor = "lightblue";
});


//lets move this element when we press arrow keys 
const speed = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    event.preventDefault(); // scrolls off screen, instead of stops

    if (event.key.startsWith("Arrow")) {
        switch(event.key) {
            case "ArrowUp":
                y -= speed;
                break;
            case "ArrowDown":
                y += speed;
                break;
            case "ArrowLeft":
                x -= speed;
                break;
            case "ArrowRight":
                x += speed;
                break;
        }
        myBox.style.top = `${y}px`; 
        myBox.style.left = `${x}px`; 
    }
})
