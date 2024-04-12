"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(value) {
        return this.balance += value;
    }
    withdraw(value) {
        if (value > this.balance) {
            alert("Số dư không đủ để rút");
        }
        else {
            return this.balance -= value;
        }
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, interesRate) {
        super(accountNumber, balance);
        this.interesRate = interesRate;
    }
    calculateInterest() {
        return this.balance * this.interesRate / 12;
    }
    printMoney() {
        console.log(this.balance);
    }
}
let acc = new SavingAccount(1234, 1000000, 2);
console.log("tien ban dau");
acc.printMoney();
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
