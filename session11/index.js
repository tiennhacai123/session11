"use strict";
class Parent {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    sayHello() {
        console.log(`hello ${this.userName}`);
    }
}
//class con muốn kế thừa class cha thì bắt buộc phải dùng từ khoá extend(kế thừa)
//các class con bé hơn nữa vẫn có thể kế thừa class con và kế thừa thêm cả class cha bằng extend
class Child extends Parent {
    constructor(userName, password, address) {
        super(userName, password);
        this.userName = userName;
        this.password = password;
        this.address = address;
    }
}
