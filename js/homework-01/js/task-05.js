"use strict";
const china = "Китай";
const chile = "Чили";
const avstralia = "Австралия";
const india = "Индия";
const jamaica = "Ямайка";
const deliveryChina = 100;
const deliveryChile = 250;
const deliveryAvstralia = 170;
const deliveryIndia = 80;
const deliveryJamaica = 120;

let inputCountry = prompt(
  "Введите название страны, в которую необходимо осуществить доставку"
);
if (inputCountry === null) {
  console.log("Отменено пользователем");
} else {
  inputCountry =
    inputCountry[0].toUpperCase() + inputCountry.slice(1).toLowerCase();
  switch (inputCountry) {
    case china:
      console.log(`Доставка в ${china} будет стоить ${deliveryChina} кредитов`);
      break;
    case chile:
      console.log(`Доставка в ${chile} будет стоить ${deliveryChile} кредитов`);
      break;
    case avstralia:
      console.log(
        `Доставка в ${avstralia} будет стоить ${deliveryAvstralia} кредитов`
      );
      break;
    case india:
      console.log(`Доставка в ${india} будет стоить ${deliveryIndia} кредитов`);
      break;
    case jamaica:
      console.log(
        `Доставка в ${jamaica} будет стоить ${deliveryJamaica} кредитов`
      );
      break;
    default:
      alert("В Вашей стране доставка не доступна");
      break;
  }
}
