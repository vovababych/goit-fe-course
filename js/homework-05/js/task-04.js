"use strict";

document.querySelector(".run-task-04").addEventListener("click", function () {
  class StringBuilder {
    constructor(value) {
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(str) {
      this._value = str;
    }
    append(str) {
      this.value = this._value + str;
    }
    prepend(str) {
      this.value = str + this._value;
    }
    pad(str) {
      this.append(str) + this.prepend(str);
    }
  }

  const builder = new StringBuilder(".");

  builder.append("^");
  console.log(builder.value); // '.^'

  builder.prepend("^");
  console.log(builder.value); // '^.^'

  builder.pad("=");
  console.log(builder.value); // '=^.^='
});
