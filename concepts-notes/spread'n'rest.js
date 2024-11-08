// ************ Spread Operator *********************

//The spread operator (...) allows an iterable such as an array or string
//to be expanded into seperate elements (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let max = Math.max(numbers);
//console.log(Math.max(...numbers));  //NaN. But, we can use the spread to unpack the array into individual elements
let min = Math.min(...numbers);

let user = "geekbarpulse";
let letters = [...user];
//console.log(letters.join(" "));

let fruits = ["apple, banana, pear, orange"];
let veggies = ["carrots", "celery", "potatoes"];
let fruitsCopy = [...fruits];
let foods = [...fruits, ...veggies];
//console.log(foods);



//*************REST PARAMETERS **********************
//(...rest) allows a function to work with a variable number of arguments by
// bundling them into an array

//spread: expands an array into seperate elements
//rest: bundles seperate elements into an array

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

function openFridge(...foods) {
    console.log(...foods);
}

function getFood(...foods) {
    return foods;
}

//console.log(getFood(food1, food2, food3, food4));
function sum(...numbers) {
    let result = 0;
    for (number of numbers) {
        result += number;
    }
    return result;
}

function getAverage(...numbers) {
    let total = 0;
    for (number of numbers) {
        total += number;
    }
    return total / numbers.length;
}
//console.log(getAverage(1,2,3));

function combineStrings(...strings) {
    return strings.join("");
}

const fullname = combineStrings("geek", "bar", "pulse");
//console.log(fullname);

