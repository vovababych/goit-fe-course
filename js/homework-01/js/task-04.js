"use strict";
const credits = 23580;
const pricePerDroid = 3000;
console.log(`У Вас ${credits} кредитов`);
console.log(`Стоимость одного дроида ${pricePerDroid} кредитов`);

const amountDroids = prompt("Сколько дроидов Вы хотите купить?");

if (amountDroids === null) {
  console.log("Отменено пользователем");
} else {
  const totalPrice = amountDroids * pricePerDroid;
  if (totalPrice > credits) {
    console.log("недостаточно средств на счету");
  } else {
    console.log(
      `Вы купили ${amountDroids} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов`
    );
  }
}
