"use strict";
class Vehile {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speed) {
        console.log("giam toc");
        return this.speed -= speed;
    }
    speedUp(speed) {
        console.log("tang toc");
        return this.speed += speed;
    }
    showSpeed() {
        console.log(this.name, this.speed, this.id);
    }
}
class Bicycle extends Vehile {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    get getGear() {
        return this.gear;
    }
    showSpeed() {
        console.log(this.name, this.speed, this.id, this.getGear);
    }
}
let bi1 = new Bicycle("fix gear", 100, 123, 6);
bi1.showSpeed();
bi1.speedUp(30);
bi1.showSpeed();
bi1.slowDown(20);
bi1.showSpeed();
