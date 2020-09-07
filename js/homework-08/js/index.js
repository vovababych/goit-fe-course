"use strict";

import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const modalBtnRef = document.querySelector(
  "button[data-action='close-lightbox']"
);
const modalImgRef = document.querySelector(".lightbox__image");

let currentIndex = 0;

galleryRef.addEventListener("click", onOpenModal);
modalBtnRef.addEventListener("click", onCloseModal);

createGallery();

function createGallery() {
  const arr = gallery.map((picture, index) => {
    return createNode(picture, index);
  });
  galleryRef.append(...arr);
}

function createNode(picture, index) {
  // const itemImgRef = document.createElement("li");
  // itemImgRef.classList.add("gallery__item");

  // const linkImgRef = document.createElement("a");
  // linkImgRef.classList.add("gallery__link");
  // linkImgRef.href = picture.original;

  // const imgRef = document.createElement("img");
  // imgRef.classList.add("gallery__image");
  // imgRef.src = picture.preview;
  // imgRef.setAttribute("data-source", picture.original);
  // imgRef.setAttribute("data-index", index);
  // imgRef.alt = picture.description;

  // linkImgRef.appendChild(imgRef);
  // itemImgRef.appendChild(linkImgRef);
  // console.dir(imgRef);
  // return itemImgRef;

  const itemAttrs = {
    class: "gallery__item",
  };

  const linkAttrs = {
    class: "gallery__link",
    href: picture.original,
  };

  const imgAttrs = {
    class: "gallery__image",
    src: picture.preview,
    "data-source": picture.original,
    "data-index": index,

    alt: picture.description,
  };

  const li = createElement("li", itemAttrs);
  const a = createElement("a", linkAttrs);
  const img = createElement("img", imgAttrs);
  li.appendChild(a);
  a.appendChild(img);
  return li;
}

function createElement(name, attrs) {
  const element = document.createElement(name);
  Object.entries(attrs).forEach(([key, value]) => {
    return element.setAttribute(key, value);
  });
  return element;
}

function onOpenModal() {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;
  modalImgRef.src = event.target.dataset.source;
  modalImgRef.alt = event.target.alt;
  currentIndex = +event.target.dataset.index;

  openModal();
  window.addEventListener("keydown", onPressKey);
  modalRef.addEventListener("click", onClickBg);
}

function openModal() {
  modalRef.classList.add("is-open");
}

function onCloseModal() {
  modalRef.classList.remove("is-open");
  modalImgRef.src = "";
  modalImgRef.alt = "";
  modalBtnRef.removeEventListener("click", onCloseModal);
  window.removeEventListener("keydown", onPressKey);
  window.removeEventListener("click", onClickBg);
}

function onPressKey() {
  const arrImages = Array.from(document.querySelectorAll(".gallery__image"));

  if (event.code === "Escape") {
    onCloseModal();
  }

  if (event.code === "ArrowRight") {
    nextImg();
  }

  if (event.code === "ArrowLeft") {
    prevImg();
  }

  function nextImg() {
    if (currentIndex + 1 === arrImages.length) {
      currentIndex = 0;
      return (modalImgRef.src = arrImages[currentIndex].dataset.source);
    }
    modalImgRef.src = arrImages[(currentIndex += 1)].dataset.source;
  }

  function prevImg() {
    if (currentIndex - 1 < 0) {
      currentIndex = arrImages.length;
    }
    modalImgRef.src = arrImages[(currentIndex -= 1)].dataset.source;
  }
}

function onClickBg() {
  // console.log(
  //   "Вот здесь, когда клацаешь по бекграунду почему то event.target !== (event.currentTarget"
  // );
  if (event.target.nodeName !== "IMG") {
    onCloseModal();
  }
}
