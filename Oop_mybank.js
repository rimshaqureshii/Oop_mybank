#! /usr/bin/env node 
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log(chalk_1.default.cyanBright.italic.bold("\n\t  **Welcome to myBank Services**  \n\t"));
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age, gender, mobilenumber, accountnumber) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.age = age;
        this.gender = gender;
        this.mobilenumber = mobilenumber;
        this.accountnumber = accountnumber;
    }
    return Customer;
}());
;
;
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
    BankAccount.prototype.withdraw = function (amount) {
        if (this.accountBalance >= amount) {
            this.accountBalance -= amount;
            console.log(chalk_1.default.magentaBright("Withdrawal of ".concat(amount, " successful.")));
            console.log(chalk_1.default.greenBright("Remaining balance is $".concat(this.accountBalance, ".")));
        }
        else {
            console.log(chalk_1.default.redBright("You have Insufficient Balance for this transaction"));
        }
    };
    ;
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 100) {
            amount -= 1;
        }
        this.accountBalance += amount;
        console.log(chalk_1.default.blue(chalk_1.default.magentaBright("Deposit of amount ".concat(amount, " successful."))));
        console.log(chalk_1.default.blue(chalk_1.default.cyanBright("Remaining Balance is $".concat(this.accountBalance))));
    };
    ;
    BankAccount.prototype.checkBalance = function () {
        console.log(chalk_1.default.yellowBright("Your Current Balance is $".concat(this.accountBalance)));
    };
    ;
    return BankAccount;
}());
;
var accounts = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000)
];
var customers = [
    new Customer("Muhammad", "Afzal", 40, "Male", 3002121212, accounts[0]),
    new Customer("Sarah", "Khan", 25, "Female", 3003131313, accounts[1]),
    new Customer("Shan", "Gul", 30, "Male", 3004141414, accounts[2])
];
var doContinue = true;
function services() {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, state_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function () {
                        var accNumber, customer, answer, _b, depositAmount, withdrawAmount, startAgain;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                                        name: "accountnum",
                                        type: "number",
                                        message: chalk_1.default.magentaBright("Enter your Account Number:")
                                    })];
                                case 1:
                                    accNumber = _c.sent();
                                    customer = customers.find(function (customer) {
                                        return customer.accountnumber.accountNumber === accNumber.accountnum;
                                    });
                                    if (!customer) return [3 /*break*/, 10];
                                    console.log(chalk_1.default.red("Welcome, ".concat(customer.firstname, " ").concat(customer.lastname, "!\n")));
                                    return [4 /*yield*/, inquirer_1.default.prompt({
                                            name: "select",
                                            type: "list",
                                            message: chalk_1.default.greenBright("Select an operation you want to perform:"),
                                            choices: [chalk_1.default.magentaBright("Deposit"), chalk_1.default.greenBright("Withdraw"), chalk_1.default.blue("CheckBalance"), chalk_1.default.red("Exit")]
                                        })];
                                case 2:
                                    answer = _c.sent();
                                    _b = answer.select;
                                    switch (_b) {
                                        case chalk_1.default.magentaBright("Deposit"): return [3 /*break*/, 3];
                                        case chalk_1.default.greenBright("Withdraw"): return [3 /*break*/, 5];
                                        case chalk_1.default.blue("CheckBalance"): return [3 /*break*/, 7];
                                        case chalk_1.default.red("Exit"): return [3 /*break*/, 8];
                                    }
                                    return [3 /*break*/, 9];
                                case 3: return [4 /*yield*/, inquirer_1.default.prompt({
                                        name: "amount",
                                        type: "number",
                                        message: chalk_1.default.blue("Enter the Deposit Amount:")
                                    })];
                                case 4:
                                    depositAmount = _c.sent();
                                    customer.accountnumber.deposit(depositAmount.amount);
                                    return [3 /*break*/, 9];
                                case 5: return [4 /*yield*/, inquirer_1.default.prompt({
                                        name: "amount",
                                        type: "number",
                                        message: chalk_1.default.cyan("Enter the Withdraw Amount:")
                                    })];
                                case 6:
                                    withdrawAmount = _c.sent();
                                    customer.accountnumber.withdraw(withdrawAmount.amount);
                                    return [3 /*break*/, 9];
                                case 7:
                                    customer.accountnumber.checkBalance();
                                    return [3 /*break*/, 9];
                                case 8:
                                    console.log(chalk_1.default.blue("Exiting Bank program......"));
                                    console.log(chalk_1.default.yellowBright("\nThank you for using our bank services. Have a good day!"));
                                    return [2 /*return*/, { value: void 0 }];
                                case 9:
                                    ;
                                    return [3 /*break*/, 11];
                                case 10:
                                    console.log(chalk_1.default.redBright("Invalid Account Number!!! Please Try Again!"));
                                    _c.label = 11;
                                case 11:
                                    ;
                                    return [4 /*yield*/, inquirer_1.default.prompt({
                                            type: "confirm",
                                            name: "continue",
                                            message: chalk_1.default.red("Do you want to Continue?"),
                                            default: false
                                        })];
                                case 12:
                                    startAgain = _c.sent();
                                    doContinue = startAgain.continue;
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1:
                    if (!doContinue) return [3 /*break*/, 3];
                    return [5 /*yield**/, _loop_1()];
                case 2:
                    state_1 = _a.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    return [3 /*break*/, 1];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
services();
