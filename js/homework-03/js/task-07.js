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
        id: this.transactions.length + 1,
        amount: amount,
        type: type,
      };
      return newTransaction;
    },

    deposit(amount) {
      this.balance += amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.DEPOSIT)
      );
    },

    withdraw(amount) {
      if (this.balance < amount) {
        return console.log(
          `снятие такой суммы не возможно, недостаточно средств. \n Баланс - ${this.balance} y.e.`
        );
      }
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
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
});
