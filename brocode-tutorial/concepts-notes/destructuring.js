
//DESTRUCTURING: extract values from arrays and objects, 
//               then assign them to variables in a convenient way:

//               [] = to perform array destructuring
//               {} = to perform object destructuring


// ---- EXAMPLE 1 -----
//SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

//on the left side we use destructuring
//on the right side, we are creating an array
[a, b] = [b, a]

// console.log(a);
// console.log(b);
//logs 2, then 1. the variables have been swapped



// ---- EXAMPLE 3 -----
//SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

//swap the position of the first element and the last element
[colors[0], colors[4]] = [colors[4], colors[0]]
// console.log(colors); -> ['white', 'green', 'blue', 'black', 'red']




// ---- EXAMPLE 3 -----
//ASSIGN ARRAY ELEMENTS TO VARIABLES
const [firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor); -> white
// console.log(secondColor); -> green
// console.log(thirdColor); -> blue

//combining array destructuring with rest parameters
const [firstColor1, secondColor1, thirdColor1, ...extraColors] = colors;
// console.log(extraColors); -> new array with the rest of the colors -> ['black', 'red']




// ---- EXAMPLE 4 -----
//EXTRACT VALUES FROM OBJECTS, object desturcturing, use {}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 30,
}

const {firstName, lastName, age, job} = person1;
// console.log(firstName); -> Spongebob
// console.log(lastName); -> Squarepants
// console.log(age); -> 30
// console.log(job); -> cook




// ---- EXAMPLE 5 -----
//DESTRUCTURE IN FUNCTION PARAMETERS
// we can pass an object to a function, and destructure it when 
// it is passed in. 

const displayPerson = ({firstName, lastName, age, job="unemployed"}) => {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Occuptation: ${job}`);
};

displayPerson(person1);
displayPerson(person2);