//SUPER = a keyword that is used in classes to call the constructor 
        //   or access the properties and methods of a parent class (super class)
        //   this = this object 
        //   super = the parent

class Animal {
   constructor() {

   }
}

//child classes
// class Rabbit extends Animal {
//     constructor(name, age, runSpeed) {
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed;
//     }
// }

//THIS WILL ENVOKE A REFERENCE ERROR: 
//IN ORDER TO ACCESS THIS IN THE CHILD CONSTRUCTORS, OR TO RETURN FROM THEM, 
//WE NEED TO ENVOKE THE CONSTRUCTOR OF THE PARENT CLASS WITH 'super()'

//child classes
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super();
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}


class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super();
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super();
        this.name = name;
        this.age = age;
        this.runSpeed = flySpeed;
    }
}

const bugsBunny = new Rabbit("Bugs Bunny", 1, 25);
const fishy = new Fish("fishy", 2, 12);
const hawky = new Hawk("hawky", 3, 10);


//NOW, IF THERE ARE PROPERTIES THAT THE CHILDREN ALL SHARE IN COMMON, 
// WE CAN SEND THEM TO THE CONSTRUCTOR OF THE PARENT IN ORDER TO NOT REPEAT OURSELVES

//since the children all share a name and an age, we can assign these properties
//in the constructor of the parent


//we can also extend a method from the parent, we will do this 
//with the move method of the animal class

class Animal2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
 }

class Rabbit2 extends Animal2 {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} can run`);
        //EXTEND THE METHOD TO THIS CLASS WITH SUPER.
        super.move(this.runSpeed);
    }
}


class Fish2 extends Animal2 {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim() {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk2 extends Animal2 {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const bugsBunny2 = new Rabbit2("Bugs Bunny", 1, 25);
const fishy2 = new Fish2("fishy", 2, 12);
const hawky2 = new Hawk2("hawky", 3, 10);

//this is why we call super, so we can use the name and 
//age properties in the parent constructor by passing them in to super

//testing

// console.log(bugsBunny2.name);
// console.log(bugsBunny2.age);

bugsBunny2.run();
fishy2.swim();
