
//How to work with arrays of objects in javascript

//this is an array of objects
const fruits = [
    {name: "apple", color: "red", calories: 95}, 
    {name: "orange", color: "orange", calories: 85}, 
    {name: "pear", color: "green", calories: 100}, 
    {name: "mango", color: "yellow", calories: 111}, 
    {name: "watermelon", color: "red", calories: 50} 
];

//if you ever need a property of one of these objects, 
//take the array at index property . property like this

console.log(fruits[0].name);

const calories = []
for (let i = 0; i < fruits.length; i++) {
    calories.push(fruits[i].calories);
}
console.log(calories);

//add a new object

fruits.push({name: "grape", color: "purple", calories: 90});
console.log(fruits);


//use the forEach method to loop through the elements and do something
fruits.forEach(fruit => {
    console.log(fruit.name);
})


//use the map method to run each element through a function and return the 
//resulting array

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

const inflatedCalories = fruits.map(fruit => fruit.calories + 10);
console.log(inflatedCalories);


//use filter to return a new array after applying a condition to each element
//and map that result to get just the names of the red fruits
const redFruits = (fruits.filter(fruit => fruit.color === "red")).map(fruit => fruit.name);
console.log(redFruits);


//use the reduce method to return a single object
//return the object with the highest calories

//REMEMBER: the return value is stored in the accumulator, so it
//can keep comparing calorie counts. The accumulator is the max in this case

const maxCalorieFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
//this ternary operator checks if the given fruits calories are greater than 
//the current max. If so, that fruit is returned  and takes the place of the accumulator (max)

console.log(maxCalorieFruit.name, maxCalorieFruit.calories); // -> mango 111

const minCalorieFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minCalorieFruit.name, minCalorieFruit.calories); // -> watermelon 50