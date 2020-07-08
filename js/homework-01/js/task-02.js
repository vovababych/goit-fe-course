"use strict";

const total = 100;
console.log(`Количество товаров на складе: ${total}`);
const ordered = 50;
console.log(`Eдиниц товара в заказе: ${ordered}`);

if (ordered > total) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
