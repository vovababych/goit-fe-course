"use strict";

const ingredientsRef = document.querySelector("#ingredients");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

function createLiRef() {
  return document.createElement("li");
}
const ArrItems = ingredients.map((item) => {
  const itemRef = createLiRef();
  itemRef.textContent = item;
  return itemRef;
});

ingredientsRef.append(...ArrItems);
