class Shape1 {
    calculatePerimeter(): number;
    calculatePerimeter(width: number, height: number): number;
    calculatePerimeter(radius: number): number;
    calculatePerimeter(arg1?: number, arg2?: number): number {
        if (arg1 !== undefined && arg2 !== undefined) {
            return arg1 * arg2;
        } else if (arg1 !== undefined){
            return Math.PI * arg1 * arg1;
        } else {
            return 0;
        }
    }
}
class Rectangle1 extends Shape1 {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    calculatePerimeter(): number {
        return (this.width + this.height)*2;
    }
}
class Circle1 extends Shape1 {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    calculatePerimeter(): number {
        return 2*Math.PI * this.radius;
    }
}
let rectangle1 = new Rectangle1(5, 10);
console.log("HCN",rectangle1.calculatePerimeter());
let circle1 = new Circle1(3);
console.log("HT",circle1.calculatePerimeter());