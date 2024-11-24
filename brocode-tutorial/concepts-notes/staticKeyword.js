

// Static: keyword that defines properties or methods that belong
//         to a class itself rather than the objects created from 
//         that class (class owns anything static, not the objects)

class MathUtil {
    static PI = 3.14169;
}

//If I want the static property, I have to access it by its **class**, not by an object
//of the class

// console.log(MathUtil.PI);

//So, I don't have to make an object to access this static property

//Using a static method

class Erich {

    static isRich;
    static balance = 0;

    static printWealth() {
        if (this.isRich === true) {
            console.log(`erich is rich with a balance of $${this.balance}`);
        }
        else {
            console.log(`erich is broke with a balance of $${this.balance}`);
        }
    }

    static addCheckToAccount(amount) {
        const newBalance = amount;
        this.balance = newBalance;
        console.log(`Erich now has a balance of: $${newBalance}`);
    }

    static setRichStatus() {
        if (this.balance > 10000) {
            this.isRich = true;
        }
        else {
            this.isRich = false;
        }
    }
}

Erich.printWealth();
Erich.addCheckToAccount(20000);
Erich.setRichStatus()
Erich.printWealth();



///EXAMPLE 2


class User {

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount ++;
    }
}

const user1 = new User("Spongebob");
console.log(user1.username);

//NOTICE: if you try to access userCount with the object:
//          console.log(user1.userCount) -> undefined!
//instead, refer to the class itself, since it is static
console.log(User.userCount);