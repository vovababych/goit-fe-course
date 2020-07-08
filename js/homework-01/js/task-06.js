"use strict";

let total = 0;
let inputNumber;
do {
  inputNumber = prompt("Введите число:");
  if (Number.isNaN(Number(inputNumber))) {
    alert("Это не число!!! Введите число, пожалуйста!");
    continue;
  }
  total += +inputNumber;
} while (inputNumber !== null);
alert(`Общая сумма чисел равна ${total}`);
