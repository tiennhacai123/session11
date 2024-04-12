"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(this.name);
        console.log(this.id);
    }
}
let std1 = new Student("Tien", 2005);
std1.displayInfo();
