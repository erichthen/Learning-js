

//setTimout:

    // function in javascript that allows you to schedule
    // the exectution of a function after an amount of time in milliseconds
    // Times are approximate (varies based on the workload of the js runtime env.)

    //setTimout(callback, delay)


const sayHello = () => {
    console.log("hello");
}

setTimeout(sayHello, 3000);

//anonymous function works too

setTimeout(() => console.log("hello"), 3000);


//you can use clearTimeout to cancel a timeout before it triggers
//we have to pass in a timeOutId. We can store the setTimout in a variable or const

const timeout = setTimeout(() => console.log("hello"), 3000);

clearTimeout(timeout);
