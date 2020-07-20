"use strict";

const runTaskRef = document.querySelector(".run-task-04");
runTaskRef.addEventListener("click", function () {
  const countTotalSalary = function (employees) {
    const arrSalary = Object.values(employees);
    let total = 0;
    for (const salary of arrSalary) {
      total += salary;
    }
    return total;
  };
  console.log(countTotalSalary({})); // 0

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })
  ); // 330

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })
  ); // 400
});
