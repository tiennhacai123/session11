"use strict";
class Book {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Library {
    constructor(name, price, quantity) {
        super(name, price); //lỗi do thuộc tính name được gán private nếu không dùng getter thì name chỉ dùng được trong class chứa nó, proceted thì vẫn truy cập được
        this.quantity = quantity;
    }
}
