
//Callback: **A function that is passed as an argument to another function**

//Used to handle asynchronous operatios like: 
//  - Reading a file
//  - Network requests
//  - Interacting with databases

//  "When you are done, call this next"
//  When using callbacks, you are 
//  guaranteeing that the function passed in will execute AFTER the original function (or previous callback)
//  WITHOUT moving on before it is complete
// This is why it is useful for reading a file, and other operations. 
//  "read the file, THEN do this." 
//  Rather than calling the read file function and moving on before its contents are fully read

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
//moves on to the next function immidietly. 

//**I want to make sure the goodbye function executes after the hello function is done,
//So, I make it a callback to the goodbye function after the hello function is complete**

// To do this, pass the goodbye function as an argument

//USING CALLBACK INSTEAD

function helloWithCallback(callback) {
    console.log("Hello!");
    callback();     //Once the function finishes, THEN the callback is called. Thus, hello gets printed before goodbye, 
                    //when normally, the compiler would move to goodbye before hello gets printed
}

//to use a callback, call the function with the argument of the callback function (without parenthesis)
//adding the parenthesis to the callback function when calling it will call it right away - not what we want
//helloWithCallback(goodbye); // -> hello, then goodbye

//hello();
//goodbye();
// -> goodbye, then hello

function leave() {
    console.log("YOU NEED TO LEAVE");
}

function helloLeave(callback) {
    console.log("Hello!");
    callback();
}

//helloLeave(leave);


// ------------------------ Second example -----------------------
// You can pass callbacks as well as other arguments to a function

function sum(callback1, callback2,  a, b) {
    let sum = a + b
    let toPrint = callback1(sum);
    callback2(toPrint);
}

function multiplyBy10(x) {
    return x * 10;
}

function displayConsole(string) {
    console.log(string);
}

sum(multiplyBy10, displayConsole, 10, 10);



