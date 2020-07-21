"use strict";

const runTaskRef = document.querySelector(".run-task-07");
runTaskRef.addEventListener("click", () => {
  const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };

  const account = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
      const newTransaction = {
        id: 0,
        amount: amount,
        type: type,
      };
      newTransaction.id = this.transactions.length + 1;

      return newTransaction;
    },

    deposit(amount) {
      this.balance += amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.DEPOSIT)
      );
    },

    withdraw(amount) {
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
      if (this.balance < amount) {
        return console.log(
          `снятие такой суммы не возможно, недостаточно средств`
        );
      }
      this.balance -= amount;
    },

    getBalance() {
      return this.balance;
    },

    getTransactionDetails(id) {
      for (const transaction of this.transactions) {
        if (transaction.id === id) {
          return transaction;
        }
      }
      return console.log(`Транзакции не существует`);
    },

    getTransactionTotal(type) {
      let totalAmount = 0;
      for (const transaction of this.transactions) {
        if (type === transaction.type) {
          totalAmount += transaction.amount;
        }
      }
      return totalAmount;
    },
  };
  //   console.log(account.createTransaction(10, Transaction.DEPOSIT));
  //   console.log(account.createTransaction(10, Transaction.WITHDRAW));
  account.deposit(100);
  account.deposit(100);
  account.deposit(100);
  account.deposit(100);
  //   console.log(account.transactions);
  // console.log(account.deposit(100));
  //   console.log(account.deposit(200));
  //   console.log(account.deposit(300));
  //   console.log(account.deposit(400));
  //   console.log(account.transactions);
  account.withdraw(50);
  account.withdraw(50);
  account.withdraw(50);

  console.log(account.getBalance());
  console.log(account.transactions);
  console.log(account.getTransactionDetails(7));
  //   console.log(account.getTransactionTotal("deposit"));
  //   console.log(account.getTransactionTotal("withdraw"));
});
