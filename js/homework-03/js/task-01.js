"use strict";

const runTaskRef = document.querySelector(".run-task-01");

runTaskRef.addEventListener("click", function () {
  const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
  };
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  const users = Object.keys(user);
  for (let value of users) {
    console.log(`${value}: \t${user[value]}`);
  }
});
