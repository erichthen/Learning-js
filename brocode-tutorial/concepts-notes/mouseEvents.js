//the dom is theoretical, no html script associated

// event listner = Listen for specifc events to create interactive 
//                 web pages

//              some events: click, mouseover, mouseout


//HTML
// <div id="myBox">
//      Click me!
// </div>

const myBox = document.createElement("div");

myBox.id = "myBox";
myBox.textContent = "Click me!";
myBox.style.backgroundColor = "lightgreen";

document.body.appendChild(myBox);


//to add an event listener, use the '.addEventListener() function
//  this functiont takes (event, callback) as aruments

//HERE ARE SOME COMMON EVENTS WE PASS IN TO THE LISTENER:

// •click: Triggered when an element is clicked.
// •dblclick: Triggered on a double-click.
// •mousedown: Triggered when a mouse button is pressed down on an element.
// •mouseup: Triggered when a mouse button is released over an element.
// •mouseenter: Triggered when the mouse pointer enters an element (does not bubble).
// •mouseleave: Triggered when the mouse pointer leaves an element (does not bubble).
// •mousemove: Triggered when the mouse pointer moves within an element.
// •mouseover: Triggered when the mouse pointer enters an element or its child elements.
// •mouseout: Triggered when the mouse pointer leaves an element or its child elements.

//first, let's make the function that will be the callback, 
//this function will change the background color

//**this function has an event as a parameter, but this event is implicitly passed in 
//by the browser, we don't have to pass an event in */

function changeContent(event) {
    console.log(event) // -> PointerEvent, an object with properties such as target
    event.target.style.backgroundColor = "red";
    //the target is what we clicked on, in this case, myBox.
    event.target.textContent = "I was clicked";
}

myBox.addEventListener("click", changeContent);


//You dont NEED to pass in a callback, you can pass in an anonymous function, 
//  or an arrow function

myBox.addEventListener("click", function(event) {
    event.target.backgroundColor = "red";
    event.target.textContent = "I was clicked";
});

//OR

myBox.addEventListener("click", event => {
    event.target.backgroundColor = "red";
    event.target.textContent = "I was clicked";
});


//Mouseover and mouse out
//Note that an element can have more than one event listener

myBox.addEventListener("mouseover", event => {
    event.target.backgroundColor = "yellow";
    event.target.textContent = "You're about to click";
});

myBox.addEventListener("mouseout", event => {
    event.target.backgroundColor = "lightgreen";
    event.target.textContent = "Click me!";
});


//lets add a button
//HTML
// <div id="myBox">
//      Click me!
// </div>
// <button id="click-me-button">Click me!</button>

const clickMeButton = document.createElement("button");
clickMeButton.id = "click-me-button";

document.body.appendChild(clickMeButton);

//add the event listeners to the button, so when the button is clicked
//and hovered over etc, the box changes

clickMeButton.addEventListener("click", event => {
    myBox.backgroundColor = "red";
    myBox.textContent = "I was clicked";
});


clickMeButton.addEventListener("mouseover", event => {
    myBox.backgroundColor = "yellow";
    myBox.textContent = "You're about to click";
});

clickMeButton.addEventListener("mouseout", event => {
    myBox.backgroundColor = "lightgreen";
    myBox.textContent = "Click me!";
});

//now, the target is the button, so the button properties
//are what  




