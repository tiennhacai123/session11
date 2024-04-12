"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    printInfor() {
        console.log(this.name, this.price, this.brand);
    }
}
let elec1 = new Electronics("Fridge", 111111111, "Panasonic");
elec1.printInfor();
