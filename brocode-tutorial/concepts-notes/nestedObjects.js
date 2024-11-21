
// NESTED OBJECTS: Objects inside other objects (duh)
//                  Allows you to represent more complex data structures
//                  Child object is enclosed by parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, {Monitor}}

// ---- EXAMPLE 1 ----
const sponge = {
    fullName: "Spongebob Squarepants",
    age: 30, 
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "International waters lol"
    }
}

//to access the nested objects, use mulitple property accessors ('.')
console.log(sponge.address.city);

//to loop through the properties of a nested object:
for (const property in sponge.address) {
    console.log(sponge.address[property]);
}



// ---- EXAMPLE 2 ----

class Address {
    
    constructor(street, city, country, zipCode) {
        this.street = street;
        this.city = city;
        this.country = country;
        this.zipCode = zipCode;
    }

}

//Now, we will use that address class as one of the properties in this person class
//to do so, use the new operator to call the constructor of the address class, the constructor
//parameter is a rest parameter as we will use multiple arguments when we pass it in to the address constructor

class Person {

    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

//construct the objects

const person1 = new Person("Erich", 21, "123 Street St.", "a city", "murica", 11111);
//since the address is a rest parameter, we can pass in multiple elements and it will
//combine them into a single array

const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "International waters", 12345);
const person3 = new Person("Squidward", 45, "127 Conch St.", "Bikini Bottom", "International waters", 12345);

console.log(person1.name);
console.log(person1.age);
console.log(person1.address); // -> returns an address object

console.log(person1.address.country); 