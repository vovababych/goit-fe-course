"use strict";

import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const modalBtnRef = document.querySelector(
  "button[data-action='close-lightbox']"
);
const modalImgRef = document.querySelector(".lightbox__image");
let index = 0;

galleryRef.addEventListener("click", onOpenModal);
modalBtnRef.addEventListener("click", onCloseModal);

createGallery();

function createGallery() {
  const arr = gallery.map((picture) => {
    return createNode(picture);
  });
  galleryRef.append(...arr);
}

function createNode(picture) {
  const itemImgRef = document.createElement("li");
  itemImgRef.classList.add("gallery__item");

  const linkImgRef = document.createElement("a");
  linkImgRef.classList.add("gallery__link");
  linkImgRef.href = picture.original;

  const imgRef = document.createElement("img");
  imgRef.classList.add("gallery__image");
  imgRef.src = picture.preview;
  imgRef.setAttribute("data-source", picture.original);
  imgRef.setAttribute("data-index", index++);

  imgRef.alt = picture.description;

  linkImgRef.appendChild(imgRef);
  itemImgRef.appendChild(linkImgRef);
  return itemImgRef;
}

function onOpenModal() {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  modalImgRef.src = event.target.dataset.source;
  modalImgRef.alt = event.target.alt;

  const activeIndex = +event.target.dataset.index;
  openModal();
  window.addEventListener("keydown", onPressEscape);
  modalRef.addEventListener("click", onClickBg);
  window.addEventListener("keydown", onClickArrow);
}

function openModal() {
  modalRef.classList.add("is-open");
}

function onCloseModal() {
  modalRef.classList.remove("is-open");
  modalImgRef.src = "";
  modalImgRef.alt = "";
  window.removeEventListener("keydown", onPressEscape);
  window.removeEventListener("click", onClickBg);
  modalBtnRef.removeEventListener("click", onCloseModal);
  modalRef.removeEventListener("keydown", onClickArrow);
}

function onPressEscape() {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

function onClickBg() {
  console.log(
    "Вот здесь, когда клацаешь по бекграунду почему то event.target !== (event.currentTarget"
  );
  if (event.target.nodeName !== "IMG") {
    onCloseModal();
  }
}

function onClickArrow(event) {
  event.preventDefault();
  if (event.code === "ArrowRight") {
    // next();
    console.log("стрелка направо");
    console.log("Вот здесь тоже какойто странный event.target");
  }
  if (event.code === "ArrowLeft") {
    // prev();
    console.log("стрелка налево");
    console.log(event.target);
  }
}

// function next() {
// }
// function prev() {}
