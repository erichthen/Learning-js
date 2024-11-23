

//synchronous = Executes line by line consecutively in a sequential manner
//              *Code that waits for an operation to complete*

//asynchronous = Allows multiple operations to be perfomred concurrently without waiting.
//               Doesn't block the execution flow and allows the program to continue while the 
//               asynchronous code is running. 

//Common asynchronous operations include: I/O operations, network requests, fetching data
//Asynchronous code is handled with callbacks, promisies, and async/await. 


//EXAMPLE

// setTimeout(() => console.log("Task 1"), 3000);

// console.log("task 2");
// console.log("task 3");
// console.log("task 4");

// -> Task 2, 3 and 4 get printed, and THEN task 1 gets printed after 3 seconds. The program 
//moves on to the next lines before task1 prints. 
//setTimeout is an asynchronous function


//Promises, async/await will be discussed later, but we can use callbacks. 

//So if we need task 1 to finish before the rest of the tasks to, but it is asynchronous, 
//we can put the setTimeout call in a function callback, 
//and put the other tasks in a synchronous function

function func1(callback) {
    setTimeout(() => {
        console.log("task 1");
        callback();
    }, 3000);
}

//This way, only after task 1 gets complete, we can call func2. 
//The tasks will now be done in order, even though the first task takes 3 seconds. 

function func2() {
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
}

func1(func2);






