"use strict";

const inputNumberRef = document.querySelector("input[type='number']");
const btnRenderRef = document.querySelector("button[data-action='render']");
const btnDestroyRef = document.querySelector("button[data-action='destroy']");
const boxesRef = document.querySelector("#boxes");

btnRenderRef.addEventListener("click", onCreateBox);
btnDestroyRef.addEventListener("click", onDeleteBox);

function onCreateBox() {
  const amount = inputNumberRef.value;
  createBox(amount);
}

function onDeleteBox() {
  Array.from(boxesRef.children).forEach((element) => {
    element.remove();
  });
  inputNumberRef.value = "";
}

function createBox(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxRef = document.createElement("div");
    boxRef.classList.add("box");
    boxRef.style.backgroundColor = randomBgColor();
    boxRef.style.height = size + "px";
    boxRef.style.width = size + "px";
    size += 10;
    boxesRef.appendChild(boxRef);
  }
}

function randomBgColor() {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  return bgColor;
}
