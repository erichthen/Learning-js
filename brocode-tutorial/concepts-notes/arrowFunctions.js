
//arrow functions = a concise way to write a function expression
//  Good for simple functions you only use once. 
//Syntax:
//  (parameters) => some code

function hello() {
    console.log("hello!");
}
//hello();

//expression
const hello1 = function() {
     console.log("hello!");
}
//hello();

//**arrow function */
const hello2 = (name) => console.log(`Hello, ${name}!`);
//hello2("erich");

const message = (name) => {
    console.log(`Hello, ${name}`);
    console.log("You are old!");
}
//message("Erich");


//another example
//setTimeout(() => console.log("Hello!"), 3000);

//another example
//

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evens = numbers.filter((element) => element % 2 == 0);
const odds = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);
