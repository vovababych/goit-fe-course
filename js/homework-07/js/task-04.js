"use strict";

let counterValue = 0;
const btnPlusRef = document.querySelector(".plus");
const btnMinusRef = document.querySelector(".minus");
const counterRef = document.querySelector(".counter");
counterRef.textContent = counterValue;

btnPlusRef.addEventListener("click", increment);
btnMinusRef.addEventListener("click", decrement);

function increment() {
  counterRef.textContent = counterValue += 1;
}
function decrement() {
  counterRef.textContent = counterValue -= 1;
}
