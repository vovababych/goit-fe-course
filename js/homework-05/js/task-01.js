"use strict";

document.querySelector(".run-task-01").addEventListener("click", function () {
  const Account = function ({ login, email }) {
    this.login = login;
    this.email = email;
  };

  Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}`);
    console.log(`Email: ${this.email}`);
  };
  console.log(Account.prototype.getInfo);

  const mango = new Account({
    login: "Mangozedog",
    email: "mango@dog.woof",
  });

  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

  const poly = new Account({
    login: "Poly",
    email: "poly@mail.com",
  });

  poly.getInfo(); // Login: Poly, Email: poly@mail.com
});
