

//DATE OBJECTS = Objects that contain values that represent dates
//               and times. These objects can be changed and formatted.

//passing in no arguments gets you the current date and time
const date = new Date();

console.log(date);

//PARAMETERS

//Date(year, month, day, hour, minute, second, ms)

const date2 = new Date(2024, 0, 1, 11, 11, 11, 11);
console.log(date2) // -> 2024-01-01T16:11:11:0.11Z

//notice the time is in military (24 hour) time. 

//you can also pass in a string, using "YYYY-MM-DDT12:00:00Z"

//The 'T' seperates the date and the time. The 'Z' means UTC time



//pass in a given amount of time in milliseconds since 'epic' 
//EPIC: THE DATE YOUR COMPUTER THINKS TIME BEGAN!

const date3 = new Date(0);
console.log(date3); // -> 1970-01-01T00:00:00.000Z

//using this format would be good for a timer



//EXTRACTING INDIVIDUAL VALUES FROM DATE OBJECT: 

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();

//you can also set these same values

date.setFullYear(2024);
date.setMonth(1);
///etc.


//USING DATE AS A TIMER

//Lets build a function that pushes a number to an array every 5 seconds. 
// we can use the setInterval method


const numbers = [];
let count = 1;

function pushToArray() {
    numbers.push(count);
    count ++;
    console.log(`Added ${count} to array.`);
}

const timer = setInterval(pushToArray, 2000); //calls the function every 2 seconds.

//OPTIONAL: use setTimeout to stop the timer after a certain period of time, 
// use the function clearInterval to stop the timer 

setTimeout(() => {
    clearInterval(timer);
    console.log("Timer has been stopped.");
}, 15000); //stops the timer after 15 seconds. 