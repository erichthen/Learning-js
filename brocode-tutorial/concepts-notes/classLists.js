
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




