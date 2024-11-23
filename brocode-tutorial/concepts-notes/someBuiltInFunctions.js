

// ============== forEach() =============

//** A built in function used to iterate over something (most likely an array) 
    //and apply a specified function (callback) to each element

//syntax: array.forEach(callback);

//---example----

let numbers = [1, 2, 3, 4, 5];

function display(element) {
    console.log(element);
}

//numbers.forEach(display);

//the forEach method will apply these things to a callback...
// -Element (current element)
// -Index
// -Location of the array itself

//When we pass in the display as a callback, we are already provided with an element argument behind the scenes

function double(element, index, array) {
    array[index] = element * 2;
}

numbers.forEach(double);
numbers.forEach(display);





// ============== map() =============

//.map() accepts a callback and applies that function
//       to each element of an array, but different from forEach because
//       **it then returns a new array**

const numbers2 = [1, 2, 3, 4, 5];

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

const squares = numbers2.map(square); //new array is returned
// console.log(squares);

const cubes = numbers2.map(cube);
// console.log(cubes);


//----another example ----
const students = ["Spongebob", "Squidward", "Patrick", "Sandy"];

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}

const uppers = students.map(upperCase);
// console.log(uppers);

const lowers = students.map(lowerCase);
// console.log(lowers);


//-----another example------
const dates = ["2024-1-10", "2023-1-10", "2022-2-20", "2022-2-19"];

function formatDates(element) {
    const parts = element.split("-");   
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
// console.log(formattedDates);






// ============== filter() =============
// creates a new array by filtering out elements

const numbers3 = [1, 2, 3, 4, 5, 6, 7];

function isEven(element) {
    return element % 2 === 0;
}

const evens = numbers3.filter(isEven);
// console.log(evens);

const ages = [20, 21, 17, 18, 35, 22, 26, 60, 10, 12, 15, 17];

function checkAdult(age) {
    return age >= 18;
}

const adults = ages.filter(checkAdult);
// console.log(adults);

const words = ["apple", "conspicous", "pomegranate", "hello", "exponential", "fragmentation"];

function isShortWord(element) {
    return element.length <= 5;
}

const shortWords = words.filter(isShortWord)
const longWords = words.filter(element => !isShortWord(element));

// console.log(shortWords);
// console.log(longWords);




// ============== reduce() =============
// reduce the elements of an array to a single value

//Calls the specified callback function for all the elements in an array. 
//The return value of the callback function is the accumulated result,
// and is provided as an argument in the next call to the callback function.

const prices = [5.85, 10.5, 30, 10, 15, 20];

function sum(accumulator, element) {
    return accumulator + element;
}

const total = prices.reduce(sum)
// console.log(total);

const grades = [75, 80, 69, 95, 99, 45, 85];

function getMax(accumulator, grade) { 
    return Math.max(accumulator, grade);
    //OR
    // if (grade > accumulator) {
    //     accumulator = grade;
    // }
    // return accumulator;
}

function getMin(accumulator, grade) {
    return Math.min(accumulator, grade);
}

const max = grades.reduce(getMax);
const min = grades.reduce(getMin);

console.log(max, min);







