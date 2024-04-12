class Account {
    protected accountNumber: number;
    protected balance: number;
    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(value: number) {
        return this.balance += value;
    }
    withdraw(value: number) {
        if (value > this.balance) {
            alert("Số dư không đủ để rút");
        } else {
            return this.balance -= value;
        }
    }
}

class SavingAccount extends Account {
    private interesRate: number;
    constructor(accountNumber: number, balance: number, interesRate: number) {
        super(accountNumber, balance);
        this.interesRate = interesRate;
    }
    calculateInterest(): number {
        return this.balance * this.interesRate / 12;
    }
    printMoney(): void {
        console.log(this.balance);
    }
}

let acc = new SavingAccount(1234, 1000000, 2);
console.log("tien ban dau");
acc.printMoney()

console.log("Tiền lãi:");
console.log(acc.calculateInterest());

console.log("Tiền sau khi gửi thêm vào:");
acc.deposit(1000000);
acc.printMoney();

console.log("Tiền lãi hàng tháng:");
console.log(acc.calculateInterest());

console.log("So tien con lai khi rut ra:");
acc.withdraw(200);
acc.printMoney();