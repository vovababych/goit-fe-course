"use strict";

const runTaskRef = document.querySelector(".run-task-06");
runTaskRef.addEventListener("click", function () {
  let input;
  const numbers = [];
  let total = 0;
  do {
    input = prompt("Введите число");
    if (input === null) {
      break;
    }
    if (Number.isNaN(Number(input))) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }
    numbers.push(+input);
  } while (input !== null);
  if (numbers.length > 0) {
    for (let number of numbers) {
      total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
  } else {
    console.log(`Массив пустой`);
  }
  console.log(numbers);
});
