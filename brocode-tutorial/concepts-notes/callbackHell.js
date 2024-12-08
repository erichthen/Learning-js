
//CALLBACK HELL:    Situation in JavaScript where callbacks are nested within
//                  other callbacks to the degree where the code is difficult 
//                  to read. Old pattern to handle asynchronous functions. Use 
//                  promises + async + await to avoid callback hell


//exmaple of callback hell

//create four tasks which are synchronous functions, 

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

function task4() {
    console.log("Task 4 completed");
}

// task1();
// task2();
// task3();
// task4();
// console.log("All tasks complete");


//WHAT IF THESE WERE ASYNCHRONOUS FUNCTIONS?
//They aren't going to follow this order from the top down

//to make these functions asynchronous, one thing we can do is use the 
//setTimeout() function

function asyncTask1() {
    setTimeout(() => {
        console.log("Async task 1 completed");
    }, 2000);
}

function asyncTask2() {
    setTimeout(() => {
        console.log("Async task 2 completed");
    }, 1000);
}

function asyncTask3() {
    setTimeout(() => {
        console.log("Async task 3 completed");
    }, 3000);
}

function asyncTask4() {
    setTimeout(() => {
        console.log("Async task 4 completed");
    }, 1500);
}


// //THIS WILL NOT BE IN ORDER
// asyncTask1(); //prints fourth (2000ms)
// asyncTask2(); //prints second (1000ms)
// asyncTask3(); //prints last (3000ms)
// asyncTask4(); //prints third (1500ms)
// console.log("All async tasks completed"); // prints first (~0ms)

//With asynchrnous code, the rest of the program does NOT wait 
//around for the function to finish




//If we need these tasks to complete IN ORDER...
//we set up the callback parameter
//After we say the task is complete, we execute the callback to the next function
//ex. pass in async task 2 into the callback, so it is called AFTER task 1 prints

function asyncTask1(callback) {
    setTimeout(() => {
        console.log("Async task 1 completed");
        callback();
    }, 2000);
}

function asyncTask2(callback) {
    setTimeout(() => {
        console.log("Async task 2 completed");
        callback();
    }, 1000);
}

function asyncTask3(callback) {
    setTimeout(() => {
        console.log("Async task 3 completed");
        callback();
    }, 3000);
}

function asyncTask4(callback) {
    setTimeout(() => {
        console.log("Async task 4 completed");
        callback();
    }, 1500);
}

function asyncTask5(callback) {
    setTimeout(() => {
        console.log("Async task 5 completed");
        callback();
    }, 500);
}

function asyncTask6(callback) {
    setTimeout(() => {
        console.log("Async task 6 completed");
        callback();
    }, 0);
}

function asyncTask7(callback) {
    setTimeout(() => {
        console.log("Async task 7 completed");
        callback();
    }, 3000);
}

//now when calling async task1, we pass in an arrow function calling async task2
//but async task2 takes a callback param as well, so we pass in another arrow function,
//calling async task 3, which takes a callback, which we will call task4, and it goes on and on
//all forming a nice, hard to read pyramid

asyncTask1(() => {
    asyncTask2(() => {
        asyncTask3(() => {
            asyncTask4(() => {
                asyncTask5(() => {
                    asyncTask6(() => {
                        asyncTask7(() => {
                            console.log("all tasks completed");
                        });
                    });
                });
            });
        });
    });
});
//but atleast the tasks are now done in order

