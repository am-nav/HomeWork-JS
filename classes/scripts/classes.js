class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = new Date().getTime();
        this.bankAccounts = [];
    }
  
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
  
    get getId() {
        return this.id;
    }
  
    addBankAccount(account) {
        this.bankAccounts.push(account);
        return account.getAccountId();
    }
  
    pay(account, amount) {
        if (account) {
          account.withdraw(amount);
        } else {
          console.log("Account not found.");
        }
    }
  
    receive(account, amount) {
        if (account) {
          account.deposit(amount);
        } else {
          console.log("Account not found.");
        }
    }
}
  
// BankAccount Class
class BankAccount {
    constructor(balance) {
      this.balance = balance;
      this.accountId =  new Date().getTime();
    }

    deposit(amount) {
      this.balance += amount;
    }

    withdraw(amount) {
      if (amount > this.balance) {
        console.log("error.");
      }else{
        this.balance -= amount;
      }
    }

    getBalance() {
      return this.balance;
    }

    getAccountId() {
      return this.accountId;
    }
}

// example
const user1 = new User("John", "Doe");
console.log(user1.fullName); 
console.log(user1.getId); 

const account1 = new BankAccount(1000);
const accountId1 = user1.addBankAccount(account1);
user1.pay(accountId1, 200);
console.log(account1.getBalance());
user1.receive(accountId1, 500);
console.log(account1.getBalance());