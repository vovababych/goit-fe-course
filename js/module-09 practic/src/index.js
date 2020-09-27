const validator = require("validator");
const throttle = require("lodash.throttle");
console.log("Привет");

const validateEmail = (email) => {
  return validator.isEmail(email);
};
console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);

console.log(
  "Is Mangozedog.com a valid email?: ",
  validateEmail("Mangozedog.com")
);

class User {
  static hello = "hello";
  constructor(name) {
    this._name = name;
  }

  get name() {
    this._name;
  }
}

const mango = new User("mango");
console.log(mango);
