"use strict";

document.querySelector(".run-task-03").addEventListener("click", function () {
  class Storage {
    constructor(arr) {
      this.items = arr;
    }
    getItems() {
      return this.items;
    }
    addItem(item) {
      this.items.push(item);
    }
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index > -1) {
        return this.items.splice(index, 1);
      }
    }
  }

  const storage = new Storage([
    "Нанитоиды",
    "Пролонгер",
    "Железные жупи",
    "Антигравитатор",
  ]);

  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

  storage.addItem("Дроид");
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

  console.log(storage.removeItem("Пролонгер"));
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
});
