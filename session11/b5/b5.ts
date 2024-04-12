class Book{
    private name:string;
    protected price:number
    constructor(name:string,price:number){
        this.name=name;
        this.price=price
    }
}
class Library{
    quantity:number;
    constructor(name:string,price:number,quantity:number) {
        super(name,price)//lỗi do thuộc tính name được gán private nếu không dùng getter thì name chỉ dùng được trong class chứa nó, proceted thì vẫn truy cập được
        this.quantity=quantity
    }
}