"use strict";

const inputRangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRangeRef.addEventListener("input", (event) => {
  textRef.style.fontSize = event.target.value + "px";
});
