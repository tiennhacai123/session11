class Parent{
    userName:string;
    password:string;
    constructor(userName:string,password:string){
        this.userName=userName;
        this.password=password;
    }
    sayHello():void{
        console.log(`hello ${this.userName}`);
    }
}
//class con muốn kế thừa class cha thì bắt buộc phải dùng từ khoá extend(kế thừa)
//các class con bé hơn nữa vẫn có thể kế thừa class con và kế thừa thêm cả class cha bằng extend
class Child extends Parent{
    address:string;
    constructor(userName:string,password:string,address:string){
        super(userName,password)
        this.userName=userName;
        this.password=password;
        this.address=address
    }
}