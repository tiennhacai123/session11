"use strict";
class Shape {
    calculateArea(arg1, arg2) {
        if (arg1 !== undefined && arg2 !== undefined) {
            return arg1 * arg2;
        }
        else if (arg1 !== undefined) {
            return Math.PI * arg1 * arg1;
        }
        else {
            return 0;
        }
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
let rectangle = new Rectangle(5, 10);
console.log("HCN", rectangle.calculateArea());
let circle = new Circle(3);
console.log("HT", circle.calculateArea());
