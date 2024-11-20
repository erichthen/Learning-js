

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

//setTimeout(hello, 3000);

//OR

// setTimeout(function() {
//     // console.log("hello");
// }, 3000);


//another example

const numbers = [1,2,3,4,5];

const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
});

//here, we pass a whole function as a value. This is a good idea when you dont need to reuse the function elsewhere, and 
//it doesn't pollute the global namespace

const evenNums = numbers.filter(function(element) {
    return element % 2 == 0;
});
console.log(evenNums);

const total = numbers.reduce(function(accumulator, element) {
    return accumulator += element;
});
console.log(total);






