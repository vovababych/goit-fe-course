"use strict";

const runTaskRef = document.querySelector(".run-task-03");
runTaskRef.addEventListener("click", () => {
  const findBestEmployee = function (employees) {
    const arrEmployees = Object.keys(employees);
    const arrTasks = Object.values(employees);
    let bestEmployee = arrEmployees[0];
    let mostTasks = arrTasks[0];

    for (let i = 1; i < arrTasks.length; i += 1) {
      if (mostTasks < arrTasks[i]) {
        mostTasks = arrTasks[i];
        bestEmployee = arrEmployees[i];
      }
    }
    return bestEmployee;
  };

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    })
  ); // lorence

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    })
  ); // mango

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    })
  ); // Lux
});
