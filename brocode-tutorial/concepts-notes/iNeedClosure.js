
// CLOSURE: 

//     A function defined inside another function.

//     The inner function has access to the variables
//     and scope of the outer function.

//     Allow for private variables and state maintenance. 
//     Used frequently in JS Frameworks like react, vue, angular.



//basic example
function outer() {
    
    let message = "hello";
    function inner() {
        //has access to everyting within outer
        console.log(message);
    }
}

//If I call the outer function, nothing appears to happen. 
outer();

//we can call then inner function within the outer function, like this:

function outer1() {

    let message = "hello";
    function inner() {
        console.log(message);
    }
    inner();
}

outer1(); // -> hello

//everything within the outer function is part of a closure. 

// **One benefit of using closures is that any variables in them are considered private.**
// we cannot do this:

message = "goodbye"; //this creates a different message variable in a different scope
outer1(); // -> still hello



//Another example: a closure can maintain the state of a variable. 

function increment() {
    let count = 0;
    count ++;
    console.log(`Count increased to ${count}`);
}

increment(); // -> Count increased by 1
increment(); // -> Count increased by 1 (notice 1 did not increment to 2, because we redeclare
                //count to be zero inside of the function)

//Solution: use a closure to maintain the state of the count variable, and maintain
    //what it was previously

//ASIDE: we could just declare the count to be global (outside the function),
    //but its not private, anyone/anything can access and manipulate the variable
    
//So, we can enclose this code within another function
//How do we access the scope within the createCounter function? 
    //One possibility is to 
        //** return an object with a method of increment **

function createCounter() {

    let count = 0;

    function increment() {
        count ++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {increment, getCount}; //returns an object with a reference to the increment function
    //This effectively “exports” the increment function so it 
    //can be used outside the scope of createCounter.
}

const counter = createCounter(); // returns an object that has an increment method. 
counter.increment();
//Now, when we call it again, our closure maintains the variable 
counter.increment();



//we cannot access and modify the count out here, which is good. 

//BUT, we can create a getCount function to return our count if we need access to it. See above
//Notice that we need to return a reference to getCount in the return object
console.log(counter.getCount());




//ANOTHER EXAMPLE

let score = 0;

function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
}

function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
}

function getScore() {
    return score;
}

// increaseScore(5);
// increaseScore(6);
// decreaseScore(3);

// console.log(`The final score is ${getScore()}pts`);


//WHAT IS THE PROBLEM WITH THIS: we can take our score and set it to anything,
    //we don't want that

//So we can enclose everything within a closure. 

function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    //return an object that has references to these functions
    return {increaseScore, decreaseScore, getScore};

}

const game = createGame();
game.increaseScore(1);
game.increaseScore(1);
game.decreaseScore(1);
console.log(game.getScore());