"use strict";
let credits = 23580;
const pricePerDroid = 3000;
console.log(`У Вас ${credits} кредитов`);
console.log(`Стоимость одного дроида ${pricePerDroid} кредитов`);

let amountDroids = prompt("Сколько дроидов Вы хотите купить?");
// let totalPrice;
if (amountDroids === null) {
  console.log("Отменено пользователем");
} else {
  let totalPrice = amountDroids * pricePerDroid;
  if (totalPrice > credits) {
    console.log("недостаточно средств на счету");
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${amountDroids} дроидов, на счету осталось ${credits} кредитов`
    );
  }
}
