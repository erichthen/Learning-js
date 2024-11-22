

//SORT IN JAVASCRIPT = method used to sort elements of an array in place.
                    //  Sorts elements as strings in lexicographic order:
                    //  (alphabet + numbers + symbols), 
                    //  not alphabetical lexiocographic  
                    //  as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();
console.log(fruits); // -> apple, banana, cocounut, orange, pineapple

const numbers = [1, 11, 20, 10, 9, 8, 7, 4];

numbers.sort()
console.log(numbers); // -> 1, 10, 11, 20, 4, 7, 8, 9

//Why is it not exactly in order? 
//This is because we are sorting it lexicographically, not numerically
//these are sorted as strings

//How do we sort numbers correctly? 

//Inside of the sort method, we need a **custom comparision function**
//this is normally a callback but you can write 
//a function expression or an arrow function

//we can use a, b as parameters and examine the array as pairs of contigous 
//elements at a time (i.e. 1 and 11, 11 and 20, 20 and 10, 10 and 9, etc.)

const numbers1 = [1, 11, 20, 10, 9, 8, 7, 4];

numbers1.sort((a, b) => a - b);
console.log(numbers1);

//our function is a - b because the sort method will sort the values depending on
//what the return function is. I.e. if its negative, b goes after a, as b is greater than a


//reverse order:

numbers1.sort((a, b) => b - a);
console.log(numbers1);


//---- sorting objects by a given property: ----:

const versionsOfMe = [
    {name: "Dumb Erich", age: 21, GPA: 0.01}, 
    {name: "Smart Erich", age: 21, GPA: 4.0},
    {name: "Erich", age: 21, GPA: 3.5},
    {name: "Not Erich", age: 21, GPA: 2.0}
]

versionsOfMe.sort((a, b) => a.GPA - b.GPA);
console.log(versionsOfMe); // -> the array of objects sorted by GPA

//if we try sorting by string name, it does not return what we want. 

versionsOfMe.sort((a, b) => a.name - b.name);
console.log(versionsOfMe);  // -> doesn't sort by string 

//// *** if you want to sort by a property that contains a string within an object, 
// you have to do it a different way: 

versionsOfMe.sort((a, b) => a.name.localeCompare(b.name))
//localeCompare will exmaine the strings for lexicographic order, which is what we want
console.log(versionsOfMe)





//NEXT SECTION: ----- SHUFFLE AN ARRAY ---------- (DLC Content)

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

//one method that can be used is...

cards.sort(() => Math.random() - 0.5);

//BUT this method is not reccomended as it is not perfectly uniformed AND
//  it can get very inefficient for larger arrays

//what we SHOULD use is the Fisher-Yates algorithm, where we...

//iterate from the end to the beginning, and in each iteration, 
//  initialize a random index, swap the element at index i with
//  the element at the random index, as follows...

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}
