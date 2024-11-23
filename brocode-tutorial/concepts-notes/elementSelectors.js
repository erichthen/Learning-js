
//ELEMENT SELECTORS:    Methods used to target and manipulate HTML elements.
//                      They allow you to select one or multiple HTML elements
//                      from the DOM (Document Object Model)


// 1. document.getElementById()            // ELEMENT OR NULL
// 2. document.getElementsByClassName()    // HTML COLLECTION
// 3. document.getElementsByTagName()      // HTML COLLECTION
// 4. document.querySelector()             // ELEMENT OR NULL
// 5. document.querySelectorAll()          // NODELIST



// 1. ***** document.getElementById() *****

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "black";
myHeading.style.textAlign = "center";

//ONE IMPORTANT NOTE: when accessing a style property in 
//javascript, you use camel casing conevention, but in css
//you use a hypehnated casing convention

console.log(myHeading);
 // -> <h1 id="my-heading" style="background-color: yellow; text-align: center;">My Heading</h1>

//If my-heading is not defined in the document, then the document selector returns null


// 2. ***** document.getElementsByClassName() ******

//returns an HTML collection: similar to an array, but limited in its built in methods

//<div class="fruits">Apple</div>
//<div class="fruits">Orange</div>
//<div class="fruits">Banana</div>

const fruits = document.getElementsByClassName("fruits");
console.log(fruits); 
// -> HTMLCollection(3)
//  >0: div.fruits
//  >1: div.fruits
//  >2: div.fruits
//  length: 3
//  >[[Prototype]]: HTML Collection

//Each has a drop down arrow to see all of its properties
fruits[0].style.backgroundColor = "yellow";
fruits[1].style.backgroundColor = "orange";

//to iterate over all of the elements, use an enhanced for loop
//HTML collections are iterable

for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}

//HTML collections do NOT have a forEach method

//What we can do, is typecast our HTML collection as an array
//To do this, use the javascript Array.from() method, since an HTML collection is iterable, 
//we can use this function

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});


// 3. ***** document.getElementsByTagName() *****

//Lets create two unordered lists in our HTML document

//  <h4>Root Vegetables</h4>
//  <ul>
//      <li>Beets<li>
//      <li>Carrots<li>
//      <li>Potatoes<li>
//  </ul>

//  <h4>Non-Root Vegetables</h4>
//  <ul>
//      <li>Broccoli<li>
//      <li>Celery<li>
//      <li>Onions<li>
//  </ul>


const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements); // -> returns an HTML collection of the h4 elements
// -> HTMLCollection(2)
//  >0: h4
//  >1: h4
//  length: 2
//  >[[Prototype]]: HTML Collection

const listElements = document.getElementsByTagName("li");
console.log(listElements)

h4Elements[0].style.backgroundColor = "yellow";
h4Elements[1].style.backgroundColor = "yellow";

for (let vegetableTitle of h4Elements) {
    vegetableTitle.style.backgroundColor = "red";
}

for (let listItem of listElements) {
    listItem.style.backgroundColor = "blue";
}

Array.from(listElements).forEach(listElement => {
    listElement.style.backgroundColor = "blue";
});



// 4. ***** document.querySelector() *****

//Returns the first matching element, or null if no matches are found
//to select an element by class name, use '.'

const element = document.querySelector(".fruits")
element.style.backgroundColor = "yellow";

//Changes the color of apple, as it is the first element of the fruits class
//you can select a class or a tagname



// 5. ***** document.querySelectorAll() *****

// Returns a nodelist: 
//  A nodelist is similar to an HTML collection, 
//  but it has built in methods similar to an array

// *Nodelists are static, while html collections are live*
// Meaning, nodelists do not update automatically in the DOM, unlike HTML collections

const fruits1 = document.querySelectorAll(".fruits");

fruits[0].style.backgroundColor = "yellow";
fruits[1].style.backgroundColor = "yellow";
fruits[2].style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");

//nodelists have a built in forEach method

foods.forEach(food => {
    food.style.width = "100px";
});


 

//WHEN TO USE WHICH? 

// Use querySelector / querySelectorAll

// 	•	When you need flexibility with CSS selectors (e.g., .class, #id, tag, attribute selectors, or combinations like .class ul li).
// 	•	When you want to select specific or complex elements (e.g., nested elements, attributes, pseudo-classes).
// 	•	When you prefer a static NodeList (querySelectorAll) or to select the first matching element (querySelector).


// Use getElementById, getElementsByClassName, or getElementsByTagName

// 	•	When you want performance: These methods are slightly faster for simpler selections.
// 	•	When selecting by:
// 	•	ID: Use getElementById (fastest, and returns one element).
// 	•	Class name: Use getElementsByClassName.
// 	•	Tag name: Use getElementsByTagName.
// 	•	When you need a live collection that updates dynamically with DOM changes.

