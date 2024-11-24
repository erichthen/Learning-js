
// **************** string practice **************

//SOME COMMON STRING FUNCTIONS
let username = "geekbarpulse";

//length
//username.length -> 12

//charAt
//const at's = [username.charAt(0), username.charAt(11)] -> [g, e];

//index of (first index of) and .lastIndexOf()
//const indicies = [username.indexOf("g"), username.indexOf("e")] -> [0, 11];

//trim -> removes whitespace
//let string = "h e l l o" -> string.trim() -> "hello"

//toUpperCase && toLowerCase

//let string = "hello".repeat(2) === "hellohello";

//startsWith() and endsWidth()

//**** .includes() 

// "h-l-l-o".replaceAll("-", "") -> "hello"

//"hello".padStart(10, "1") -> "1111111111hello"
//"hello".padEnd(10, "!") -> "hello!!!!!!!!!!"


//MOST IMPORTANT: string.slice()
//"hello, world!".slice(0, string.indexOf(,)) -> "hello"
//"hello, world!"".slice(string.indexOf(" ") + 1) -> "world!"

//split
//const[username, email] = email.split('@)
//erich.then2@gmail.com -> [erich.then2, gmail.com]


const names = ["Erich Then", "Abby Then", "Bromigo migo", "Saquon Barkeley"];

function nameFormatter(name) {
    if (typeof name !== "string") {
        // console.log(`${name} is not a valid string`);
        return;
    }
    let indexOfSpace = name.indexOf(" ");
    let firstName = name.slice(0, indexOfSpace);
    let lastName = name.slice(indexOfSpace + 1);
    
    let formattedName = `${lastName}, ${firstName}`;
    return formattedName;
}

for (let i = 0; i < names.length; i++) {
   // console.log(nameFormatter(names[i]));
}

const emails = ["erich.then2@gmail.com", "erich.then@gmail.com", "bromigo@yahoo.com", "saquonemail.com"];

function mapUserDomain (emails) {
    let userDomainMap = new Map();

    emails.forEach(email => {
        if (!email.includes("@") || !email.includes(".com")) {
            console.log(`${email} is not a valid email`);
            return;
        }
        const [username, domain] = email.split('@');
        userDomainMap.set(username, domain);
    });

    return userDomainMap;
}

// console.log(mapUserDomain(emails));


//STRING EQUALITY

// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values and datatype are equal)
// != inequality operator
// !== strict inequality operator

const pi = 3.14;

if (pi === "3.14") { //NO, because it checks type as well
}
else {
}



// ****************** Method chaining:  ********************

//It is calling one method after another in one continious line of code

//NO method chaining example
function formatString(username) {
    username = username.trim();

    let first = username.charAt(0);
    first = first.toUpperCase();

    let restOfLetters = username.slice(1);
    restOfLetters = restOfLetters.toLowerCase();

    username = first + restOfLetters;
    return username;

}

//console.log(formatString("erich Then"))

function formatStringChained(username) {
    username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
    return username;
}   

//console.log(formatStringChained("erich Then"))
//Method chaining example


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

