
//ERRROR OBJECTS = An object that is created to represent a problem
//                 that occurs. Commonly occurs or is handled with 
//                 user input or establishing a connection, also handled
//                 a lot with asynchronous code


console.log("Hello");

console.log("You have reached the end");

// "console.lag() -> TYPE ERROR: a type error happens when you try to access
//somethign within an object that doesn't exist.

//"console.log(x) -> x is not defined -> UNCAUGHT REFERENCE ERROR"

//If the hello log was an error, the you have reached the end log would never execute. 
//Since an error stops the execution of a program, we can HANDLE THEM with..

// try {} = encloses code that might potentially cause an error
// catch {} = catch and handle any thrown errors from the code in try{}
// finally {} (optional) Always executes. Used mostly for clean up like
//              closing files, closing connections, releasing resources

try {
    console.log(y);
}
catch(error) {
    console.error(error);
}
console.log("You have reached the end of the program")

//even though there is an error, since it was caught, our program continues, and the 
//last log executes