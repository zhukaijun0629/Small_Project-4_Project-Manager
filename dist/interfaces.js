"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1;
user1 = new Person();
user1.greet("Hi there - I am");
console.log(user1);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=interfaces.js.map