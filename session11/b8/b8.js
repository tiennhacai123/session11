"use strict";
class Account1 {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}
class CheckingAccount extends Account1 {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw1(value) {
        if (value <= this.balance + this.overdraftLimit) {
            this.balance -= value;
            console.log(`rut ${value}`);
            console.log(`So du hien tai ${this.balance}`);
        }
        else {
            console.log("So du khong du");
        }
    }
}
let checkingAcc = new CheckingAccount(5678, 5000, 1000);
checkingAcc.withdraw1(600); //rut trong han muc
console.log("rut 6000");
checkingAcc.withdraw1(6000); //rut ngoai han muc
