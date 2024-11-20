//OBJECT: 
//  A collection of related properties and/or methods
//  Can represent real world objects
//  object = {key: value, function()}

//Spongebob object
const person1 = {
    //properties
    firstName: "Spongebob",
    lastName: "Squarepants", 
    age : 3, 
    isEmployed : true
}

//to access a property, use object.property
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

//objects cannot have the same name
const person2 = {
    firstName : "Patrick",
    lastName : "Star",
    age: 42,
    isEmployed: false
}

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

//objects can also have functions that belong to them, called methods
const person3 = {
    //properties
    firstName: "Spongebob",
    lastName: "Squarepants", 
    age: 3, 
    isEmployed: true,
    sayHello: function(){console.log("Hi I'm Spongebob")},
    eat: () => {console.log("I am eating a Krabby Patty")}
}

person3.sayHello();
person3.eat();


//CONSTURCT OBJECTS AUTOMATICALLY WITH A CONSTRUCTOR

//constructor = special method for defining the properties and methods of objects

//pay attention the capitalization
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year; 
    this.color = color;
}

//notice the new keyword
const car1 = new Car("Toyota", "Camry", 2015, "red");
const car2 = new Car("Ford", "Mustang", 2024, "blue");