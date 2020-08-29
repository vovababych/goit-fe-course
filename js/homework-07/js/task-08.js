"use strict";

const inputNumberRef = document.querySelector("input[type='number']");
const btnRenderRef = document.querySelector("button[data-action='render']");
const btnDestroyRef = document.querySelector("button[data-action='destroy']");
const boxesRef = document.querySelector("#boxes");
const defaultSize = 30;

btnRenderRef.addEventListener("click", onCreateBox);
btnDestroyRef.addEventListener("click", onDeleteBox);

function onCreateBox() {
  createBox(inputNumberRef.value);
}

function onDeleteBox() {
  boxesRef.innerHTML = "";
  cleanInput();
}

function createBox(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = defaultSize + i * 10;
    createBoxBySize(size);
  }
  cleanInput();
}

function createBoxBySize(size) {
  const boxRef = document.createElement("div");
  boxRef.classList.add("box");
  boxRef.setAttribute(
    "style",
    `width:${size}px; height:${size}px; background-color:${getRandomBgColor()}`
  );
  boxesRef.appendChild(boxRef);
}

function cleanInput() {
  inputNumberRef.value = "";
}

function getRandomBgColor() {
  const r = getRandomNum();
  const g = getRandomNum();
  const b = getRandomNum();
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  return bgColor;
}

function getRandomNum() {
  return Math.round(Math.random() * 256);
}
