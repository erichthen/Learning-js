

//DOM NAVIGATION: The process of navigating through the structure
//                of an HTML document using javascript

//HTML elements inlcude, but are not limited to, the following
//properties for DOM NAVIGATION

//  .firstElementChild
//  .lastElementChild
//  .nextElementSibling
//  .previousElementSibling
//  .parentElement
//  .children

//Lets make some unordered lists in HTML

//  <ul id="fruits">
//     <li>apple</li>
//     <li>orange</li>
//     <li>banana</li>
//  </ul>

//  <ul id="vegetables">
//     <li>carrot</li>
//     <li>onion</li>
//     <li>potatoes</li>
//  </ul>

//  <ul id="desserts">
//     <li>cake</li>
//     <li>pie</li>
//     <li>icecream</li>
//  </ul>

 //These unordered lists are elements, and they each have their own children
 //A child is an element found within an element

 //These three unordered lists each have three children




// --------- .firstElementChild ---------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;

firstChild.style.backgroundColor = "yellow"; //highlights apple

const element1 = document.getElementById("vegetables");
const firstChild1 = element1.firstElementChild;

firstChild1.style.backgroundColor = "yellow"; //highlights carrot

const element2 = document.getElementById("desserts");
const firstChild12= element2.firstElementChild;

firstChild1.style.backgroundColor = "yellow"; //highlights cake


const unorderedLists = document.querySelectorAll("ul");

//using queryselectorall to access all first children of matching elements
unorderedLists.forEach(unorderedList => {
    const firstChild = unorderedList.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
}); // -> highlights apple, carrots, and cake





// --------- .lastElementChild ---------
unorderedLists.forEach(unorderedList => {
    const lastChild = unorderedList.lastElementChild;
    lastChild.style.backgroundColor = "red";
});
//Just like the above examples, but last children, i.e banana, potato, icecream





// -------- .nextElementSibling ------
//lets go back and give each list element an id
//  <ul id="fruits">
//     <li id="apple">apple</li>
//     <li id="orange">orange</li>
//     <li id="banana">banana</li>
//  </ul>

//  <ul id="vegetables">
//     <li id="carrot">carrot</li>
//     <li id="onion">onion</li>
//     <li id="potato">potato</li>
//  </ul>

//  <ul id="desserts">
//     <li id="cake">cake</li>
//     <li id="pie">pie</li>
//     <li id="icecream">icecream</li>
//  </ul>

//Elements under the same element are siblings
//for example, apple, orange, and banana are all siblings
//apples next sibling is orange

const element3 = document.getElementById("apple");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "orange"; // -> orange gets highlighted orange


//What if instead we selected an unordered list, like fruits? 
const fruits1 = document.getElementById("fruits");
const nextSibling = fruits1.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

//this would highlight the whole unordered list of vegetables. Vegetables is a sibling 
//of fruits, and it is a list, so all its contents get highlighted


// -------- .previousElementSibling ------

//very straightforward, same thing as next but the reverse


// -------- parentElement ---------
const element4 = document.getElementById("apple");
//apples parent is the unordered list it is in. 
const parent = element4.parentElement;
parent.style.backgroundColor = "red"; // -> unordered list of fruits is highlighted

// ------- children ---------
//self explanatory at this point


//REMEMBER HTML collections don't have a built in for each, but node lists do (returned by querySelectorAll)

