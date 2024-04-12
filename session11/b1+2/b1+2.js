"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
    get getPhone() {
        return this.phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(this.name);
        console.log(this.company);
        console.log(this.getPhone);
        console.log(this.teamSize);
    }
}
let ma1 = new Manager("Tien", "three sheep", 9234234, 1);
ma1.printInfo();
