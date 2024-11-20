function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = new Date().getTime();
    this.bankAccounts = [];
}
  
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
};

User.prototype.getId = function () {
    return this.id;
};

User.prototype.addBankAccount = function (account) {
    this.bankAccounts.push(account);
    return account.getAccountId();
};

User.prototype.pay = function (account, amount) {
    if (account) {
      account.withdraw(amount);
    } else {
      console.log("Account not found.");
    }
};

User.prototype.receive = function (account, amount) {
    if (account) {
      account.deposit(amount);
    } else {
      console.log("Account not found.");
    }
};

BankAccount 
function BankAccount(balance) {
  this.balance = balance;
  this.accountId = new Date().getTime();
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
      console.log("The balance is not enough.");
    }else{
      this.balance -= amount;
    }
};

BankAccount.prototype.getBalance = function () {
  return this.balance;
};

BankAccount.prototype.getAccountId = function () {
  return this.accountId;
};


// Example
let user2 = new User("John", "Smith");
console.log(user2.getFullName());
console.log(user2.getId());

let account2 = new BankAccount(500);
let accountId2 = user2.addBankAccount(account2);
user2.pay(accountId2, 100);
console.log(account2.getBalance()); 
user2.receive(accountId2, 300);
console.log(account2.getBalance()); 