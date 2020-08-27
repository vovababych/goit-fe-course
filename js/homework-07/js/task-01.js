"use strict";

const categoriesRef = document.querySelector("#categories");
const amountCategories = categoriesRef.children.length;

console.log(`В списке ${amountCategories} категории`);
console.log("");

const arrItems = [...categoriesRef.children].map((item) => {
  let titleCategory = item.firstElementChild.textContent;
  let amountEl = item.lastElementChild.children.length;
  console.log(`Категория: ${titleCategory}`);
  console.log(`Количество элементов: ${amountEl}`);
  console.log("");
});
