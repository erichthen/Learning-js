
//Callback: **A function that is passed as an argument to another function**

//Used to handle asynchronous operatios like: 
//  - Reading a file
//  - Network requests
//  - Interacting with databases

//  "When you are done, call this next"


// ------------------------ Simple example -----------------------
// hello();
// goodbye();

//what if my hello function takes a long time to process? 
//setTimeout makes us wait for three seconds
function hello() {
    setTimeout(function() {
        console.log("Hello!");
    }, 3000);
}

function goodbye() {
    console.log("Goodbye!");
}

//Goodbye prints first. Meaning: javascript doesn't wait around for hello to finish, it gets called, and then
//moves on to the next function instantly. 

//**I want to make sure the goodbye function executes after the hello function is done,
//So, I make it a callback to the goodbye function after the hello function is complete**

// To do this, pass the goodbye function as an argument

//hello();
//goodbye(); 
//becomes...
//hello(goodbye); //done add parenthesis after inside function name, you would call it right away

function hello(callback) {
    console.log("Hello!");
    callback();
}



