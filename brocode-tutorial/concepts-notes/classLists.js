//theoretical dom, no html or css file associated with this script

//CLASSLIST = It is an element property in Javascript used to interact
//            with an element's list of classes (CSS Classes)

//          Allows you to make reusable classes for many elements across webpage


//some operations with classlists:

//add()
//remove()
//toggle (remove if present, add if not)
//replace(oldClass, newClass)
//contains()


//css we are working with:

// #myButton {
//     font-size: 4rem;
//     margin: 10px;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 15px;
// }

// .enabled {
//     background-color: blue;
//     color: white;
// }

const myButton = document.createElement("button");
myButton.id = "myButton";
myButton.textContent = "My Button";
document.body.appendChild(myButton);

//to add this button to the enabled class, we do...
myButton.classList.add("enabled");
//this appends the css properties dynamically


//to remove it from the class...
myButton.classList.remove("enabled");


//adding a css class:

// #myButton {
//     font-size: 4rem;
//     margin: 10px;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 15px;
// }

// .enabled {
//     background-color: blue;
//     color: white;
// }

// .hover {
//      box-shadow: 0 0 10px black;
//      font-weight: bold;
//}

//adding the class in javascript:

myButton.classList.add("hover");

//but we want this to be added only if we hover, so add a mouseover event listener
myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
})

//and remove it on mouseout
myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
})


//OR

//We can use toggle, which removes it if the class is present, add if its not. 
//but don't add the class before, as mouseover will hide it when it should show it
myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

//and remove it on mouseout
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});


//new css class: disabled

// #myButton {
//     font-size: 4rem;
//     margin: 10px;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 15px;
// }

// .enabled {
//     background-color: blue;
//     color: white;
// }

// .hover {
//      box-shadow: 0 0 10px black;
//      font-weight: bold;
// }

//  .disabled {
//      background-color: grey;
//      color: lightgrey; //use HSL values
//  }

//we will be replacing the enabled class with the 
//disabled class when we click on the button

myButton.classList.add("enabled");

myButton.addEventListener("click", event => {
    event.target.classList.replace("enabled", "disabled");
});



//contains method: if an element contains a class, returns true, else returns false
//if you click on the button and its disabled, emoji will pop up, if its not disabled, disable it
myButton.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "😩";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});


//html elements have a classlist property, so we can reuse css classes amongst many html elements
//create an h1 element

//<body>
//  <h1 id="myH1">Hello</h1>
//  <button id="myButton">My button</button>
//</body>

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

//add the enabled class to h1
myH1.classList.add("enabled");

//when click on h1 and disabled, add emoji, if enabled, disable it
myH1.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "😩";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});




//make 4 buttons and store them in a nodelist

//<body>
//  <h1 id="myH1">Hello</h1>
//  <button id="myButtons">Button 1</button>
//  <button id="myButtons">Button 2</button>
//  <button id="myButtons">Button 3/button>
//  <button id="myButtons">Button 4</button>
//</body>

// .myButtons { //this becomes a class now
//     font-size: 4rem;
//     margin: 10px;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 15px;
// }

// .enabled {
//     background-color: blue;
//     color: white;
// }

// .hover {
//      box-shadow: 0 0 10px black;
//      font-weight: bold;
// }

//  .disabled {
//      background-color: grey;
//      color: lightgrey; //use HSL values
//  }

const myButtons = document.querySelectorAll(".myButtons");


//apply enabled class to all of the buttons
myButtons.forEach(button => {
    button.classList.add("enabled");
});

//when we hover our cursor over one of these buttons, we will toggle the hover class
myButtons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

//when cursor leaves the button, toggle again
myButtons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

//when we click on one of the buttons, replace enabled class with disabled class
//when we click on a button that is disabled, change the text content
myButtons.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.contains("disabled")) {
            event.target.textContent += "🥵";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});
 