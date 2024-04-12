class Vehile{
    protected name:string;
    protected speed:number;
    protected id:number;
    constructor(name:string,speed:number,id:number) {
        this.name=name;
        this.speed=speed;
        this.id=id;
    }
    slowDown(speed:number):number{
        console.log("giam toc");      
        return this.speed-=speed;
    }
    speedUp(speed:number):number{
        console.log("tang toc");
        return this.speed+=speed;
    }
    showSpeed(){
        console.log(this.name,this.speed,this.id);
    }
}
class Bicycle extends Vehile{
    private gear:number;
    constructor(name:string,speed:number,id:number,gear:number){
        super(name,speed,id);
        this.gear=gear;
    }
    get getGear():number{
        return this.gear;
    }
    showSpeed(){
        console.log(this.name,this.speed,this.id,this.getGear);
    }
}
let bi1= new Bicycle("fix gear",100,123,6);
bi1.showSpeed()
bi1.speedUp(30);
bi1.showSpeed()
bi1.slowDown(20);
bi1.showSpeed()