
// Inheritance = allows a new class to inherit properties and methods
//               from and existing class (parent -> child)
//               helps with code reusability



//parent class
class Animal {

    alive = true;

    eat() {
        console.log(`This ${this.name} is eating.`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}

//child classes
class Rabbit extends Animal {
    name = "rabbit";

    run() {
        //running
    }
}

class Fish extends Animal {
    name = "fish";

    swim() {
        //swimming
    }
}

class Hawk extends Animal {
    name = "hawk";

    fly() {
        //flying
    }
}

const rabbit = new Rabbit();
rabbit.eat();

//the child classes inherited all of the properties and methods of the animal class

//How does the animal class know which name to use? 
// this.name will use the name of the object calling the method. Rabbit calls the eat method, 
// so the eat method in the animal class knows to use the name property of the rabbit. 