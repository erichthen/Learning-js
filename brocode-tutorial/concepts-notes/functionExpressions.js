

//Function declaration: defines a reusable block of code to perform a specific task

function hello() {
    console.log("Hello");
}

//Function expression: a way to define functions as values or variables

const helloExpression = function() {
    console.log("Hello");
}

// helloExpression();


//we can pass a function as a value

// setTimeout(hello, 3000);

setTimeout(function() {
    console.log("hello");
}, 3000);


