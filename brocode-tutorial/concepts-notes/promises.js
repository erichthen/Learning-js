

//Promise : An object that manages asynchronous operations/
//          Wrap a promise object around asynchronous code
//          "I promise to return value"
//          PENDING -> RESOLVED OR REJECTED
//          new Promise((resolve, reject) => {asynchronous code})



//example

//do these chores in order

//1. Walk the dog
//2. Clean the kitchen
//3. Take out the trash


//first, we will use callbacks to do these

function walkDog(callback) {
    setTimeout(() => {
        console.log("You walk the dog 🐕");
        callback();
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("You clean the kitchen 🧼");
        callback();
    }, 3000);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("You take out the trash 🚮");
        callback();
    }, 500);
}

//if we want these done in the order of walk, clean, take out trash
//then we need to pass in the next function into the callback parameter of 
//each function and enter callback hell below

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("All chores completed")
//         });
//     });
// });

//to avoid this callback hell, we can use PROMISES
//we can wrap the asynchrnous code in the function inside a promise
//by using a promise, we don't need callbacks, 
// instead, we can **method chain our promises**. the process is defined below

//remove the callback parameter and function call

//at the end of each function, we will return a new promise object

//the parameters are resolve and reject. Take all of the asynchronous code in the function
//and place it inside of the promise

//our message when the function finishes successfully will be placed in resolve()

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the dog 🐕");
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen 🧼");
        }, 3000); 
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the trash 🚮");
        }, 500);
    });
}

//now, to call these in order, we can use method chaining
//we need to use the **then method** 

//the walk dog function, for example, does provide a 
//value parameter, which is the console.log message
//and we can use it inside the then function

//here, we will use the then() method 
// walkDog().then(value => console.log(value)); //prints message inside resolve() of walk dog funciton


//now, we want to clean the kitchen after walking the dog
//within the arrow function inside then() we can write more than one statement to call the next function
//this next function returns a promise, so we can use another .then() to do the same thing for the next function
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("All tasks completed!")});






//now, we need to handle the promise failing, we don't want to resolve the promise
//we want to reject it. We will modify the functions to demonstrate this

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("You walk the dog 🐕");
            }
            else {
                reject("You DIDN'T walk the dog!");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;
            if (kitchenCleaned) {
                resolve("You clean the kitchen 🧼");
            }
            else {
                reject("You DIDN'T clean the kitchen!");
            }
        }, 3000); 
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTaken = true;
            if (trashTaken) {
                resolve("You take out the trash 🚮");
            }
            else {
                reject("You DIDN'T take out the trash!");
            }
        }, 500);
    });
}


//now, when calling our functions with the method chaining, we need to add the
//"catch()" method to catch any errors

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("All tasks completed!")})
         .catch(error => {console.error(error)});
         //this one catch call will look for any rejected promises

         //if for example, the second promise is rejected, the third will not execute
         //it won't attempt to resolve the rest of the promises
