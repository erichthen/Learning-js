
//CREATING AND APPENDING ELEMENTS TO THE DOM 
//DOM: Document Object Model

//  <div id="container">

//     <div id="box1" class="box">
//          <p>Box 1</p>
//     </div>

//     <div id="box2" class="box">
//          <p>Box 2</p>
//     </div>

//     <div id="box3" class="box">
//          <p>Box 3</p>
//     </div>

//     <div id="box4" class="box">
//          <p>Box 4</p>
//     </div>

//  </div>

//setting this DOM structure up with javascript:

const container = document.createElement("div");
container.id = "container";

for (let i = 1; i <= 4; i++) {
    const box = document.createElement("div");
    box.id = `box${i}`;
    box.className = "box";

    const p = document.createElement("p");
    p.textContent = `Box ${i}`;
    box.appendChild(p);

    container.appendChild(box);
}

document.body.appendChild(container);


//CREATING AND APPENDING MORE ELEMENTS STEP BY STEP


//STEP 1: create the element
const newHeader1 = document.createElement("h1");




//STEP 2: add attributes and properties to the element
newHeader1.textContent = "Creating and appending elements to Mr.DOM"
newHeader1.id = "myNewHeader";
newHeader1.style.color = "blue";
newHeader1.style.textAlign = "center";


//STEP 3: append the element to Mr.DOM
document.body.append(newHeader1);

//NOTE: this header becomes the last child i.e. comes after the container. 
//If you want it to be at the top (before container), you can use .prepend instead

//Lets put it inside box1 instead, so it is a child of box1
document.getElementById("box1").append(newHeader1);
//When appending to box1, the new header will be the *last* child of box1. 

//what if we wanted to take our new h1 and sandwich it in between box 1 and box2? 
const box2 = document.getElementById("box2")
container.insertBefore(newHeader1, box2)// params: (new element, insert before element)
//This inserts the header after box1 and before box2, it is now a sibling of the boxes. 



//LAST STEP (Optional): Remove the element if you want to

//you can use the remove child method
document.box1.removeChild(newHeader1);

//What if the h1 element isn't in box1?
//THE SELECTOR HAS TO BE THE DIRECT PARENT OF THE ELEMENT
//this is why
document.body.removeChild(newHeader1); //will not work,
//because body is the granparent of newHeader1, not the parent





//Last exmaple: ordered lists

//clear the DOM
while (container.firstChild) {
    container.firstChild.remove();
}

