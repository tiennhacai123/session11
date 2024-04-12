class Product{
    protected name:string;
    protected price:number
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
}
class Electronics extends Product{
    private brand:string;
    constructor(name:string,price:number,brand:string){
        super(name,price);
        this.brand=brand
    }
    printInfor(){
        console.log(this.name,this.price,this.brand);
    }
}
let elec1=new Electronics("Fridge",111111111,"Panasonic");
elec1.printInfor();