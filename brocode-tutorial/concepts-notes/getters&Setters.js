

//GETTER:  SPECIAL METHOD THAT MAKE A PROPERTY READABLE
//SETTER:  SPECIAL METHOD THAT MAKES A PROPERTY WRITEABLE

// validate and modify a value when reading/writing a property

// In JavaScript, getters and setters are special methods that 
// provide controlled access to an object’s properties. They 
// allow you to define how a property is retrieved or set, giving
// you more control over property behavior.


// •	A getter is a method that retrieves the value of a property.
// •	It is defined using the get keyword.
// •	Getters allow you to compute or process a value dynamically when it is accessed.

class Person {
    
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// •	A setter is a method that sets or updates the value of a property.
// •	It is defined using the set keyword.
// •	Setters allow you to perform validation, computations, or additional logic when a property is updated.
//      A set method must have exactly on parameter

class Person1 {
    
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [first, last] = name.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
}

//another example

class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

// const rectangle = new Rectangle(-1000, "pizza");
// console.log(rectangle.width, rectangle.height);

//this doesn't make any sense, so we can use some validation with getters and setters. 

//when setting one of these properties, either initially through a constructor, 
//or updating one of them later, we can go through a setter first

//by using 'this._property', you tell other developers that property is private, and 
//shouldnt be touched at all, and it is different than the standard proprty

class Rectangle1 {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width is invalid");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height is invalid");
        }
    }
}

// const rectangle = new Rectangle1(10, 10);

// console.log(rectangle.width);
// console.log(rectangle.height);

//AT THIS POINT, EVEN WITH VALID PROPERTIES, THEY ARE UNDEFINED. BECAUSE THEY HAVE 
//BEEN SET, BUT NOT GET, THEY ARE WRITEABLE, BUT NOT READABLE

//NOW WE MUST USE GETTERS
class Rectangle2 {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width is invalid");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height is invalid");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this._width * this._height;
    }

}

const rectangle = new Rectangle2(10, 10);

console.log(rectangle.width);
console.log(rectangle.height);

//NOW, WE CAN UPDATE THE VALUES LATER IF NEEDED BECAUSE OF THE SETTERS
//If again, we give them invalid values, they will not be set, and the previous values
//will be retained.


//we can also get something that is not a property, like area. 
//using a get area method, we can now access area as if it was a property

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


//another example

class Person2 {
    
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("first name invalid");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("last name invalid");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("age is invalid");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }
}