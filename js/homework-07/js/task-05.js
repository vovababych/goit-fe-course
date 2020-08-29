"use strict";

const inputRef = document.querySelector("#name-input");
const nameOutRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onChangeNameOut);

function onChangeNameOut(event) {
  nameOutRef.textContent =
    inputRef.value.trim().length === 0 ? "незнакомец" : event.target.value;
}
