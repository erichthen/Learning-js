

//NODELIST: A nodelist in javascript is a STATIC collection of HTML elements
//          by (id, class, element)

//In this context, static means that after the nodelist
//is created, it will not update automatically when the DOM does. 

//A nodelist can be created by using querySelectorAll(), selecting elements by 
//an id and or class and or element type

//•	When you use document.querySelectorAll(), the resulting NodeList 
//  is a snapshot of the DOM elements at the time it was created.
// i.e if you remove an element from the DOM that is in the nodelist, you have to also
//  remove it from the nodelist

//It is similar to an array, but doesn't have map, filter, or reduce functions


//sample HTML:

// <body>
//  <button class="myButtons">Button 1</button>
//  <button class="myButtons">Button 2</button>
//  <button class="myButtons">Button 3</button>
//  <button class="myButtons">Button 4</button>
// </body>

let buttons = document.querySelectorAll(".myButtons"); //or ("button") since there are no other buttons

console.log(buttons)// -> nodelist(4) 

 //add html and css properties

 buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent = "🥹";
 });

 //add an event listener to each button, when we click it changes color and emoji changes
 buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "yellow"; //target is the button we click on
        event.target.textContent = "😝";
    });
 });

//change color of button when we hover over it and emoji changes
buttons.forEach(button => {
    button.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue";
        event.target.textContent = "😁";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "tomato";
        event.target.textContent = "😡";
    });
});


//ADDING AN ELEMENT TO A NODELIST

//Create the element
const newButton = document.createElement("button");
newButton.textContent = "Button 5";

//to give the new button a class, use .classList, not .class
newButton.classList = "myButtons";

//append the element to the DOM
document.body.appendChild(newButton);

//because nodelists are static, this new button was not added to the nodelist

//append the new button to the nodelist by using query selector again

buttons = document.querySelectorAll(".myButtons"); 


//removing the buttons from the dom and the nodelist when clicked

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.remove(); //removes the buttons from the dom, but not the nodelist

        //to remove from the nodelist, simply update buttons with a new queryselectorall
        buttons = document.querySelectorAll(".myButtons");
        //since .myButtons no longer contains the removed button, 
        //the new query will not include it
    });
});