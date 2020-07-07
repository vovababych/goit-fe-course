"use strict";
const china = "Китай";
const chile = "Чили";
const avstralia = "Австралия";
const india = "Индия";
const jamaica = "Ямайка";
let price;

let inputCountry = prompt(
  "Введите название страны, в которую необходимо осуществить доставку"
);
if (inputCountry == null) {
  console.log("Отменено пользователем");
} else {
  inputCountry =
    inputCountry[0].toUpperCase() + inputCountry.slice(1).toLowerCase();
  switch (inputCountry) {
    case china:
      price = 100;
      console.log(`Доставка в ${china} будет стоить ${price} кредитов`);
      break;
    case chile:
      price = 250;
      console.log(`Доставка в ${chile} будет стоить ${price} кредитов`);
      break;
    case avstralia:
      price = 170;
      console.log(`Доставка в ${avstralia} будет стоить ${price} кредитов`);
      break;
    case india:
      price = 80;
      console.log(`Доставка в ${india} будет стоить ${price} кредитов`);
      break;
    case jamaica:
      price = 120;
      console.log(`Доставка в ${jamaica} будет стоить ${price} кредитов`);
      break;
    default:
      alert("В Вашей стране доставка не доступна");
      break;
  }
}
