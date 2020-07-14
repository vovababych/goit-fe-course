"use strict";

const runTaskRef = document.querySelector(".run-task-06");
runTaskRef.addEventListener("click", function () {
  let input;
  const numbers = [];
  let total;
  do {
    input = prompt("Введите число");
    // if (input === null) {
    //   console.log(`Отменено пользователем`);
    //   break;
    // }
    // console.log(input);
    numbers.push(input);
    console.log(numbers);
  } while (input !== null);
  for (let number of numbers) {
    total += number;
  }
  console.log(total);
});
