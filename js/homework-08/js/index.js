"use strict";

import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const modalBtnRef = document.querySelector(
  "button[data-action='close-lightbox']"
);
const modalImgRef = document.querySelector(".lightbox__image");
let index = 0;
let currentIndex = 0;

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
  // const itemImgRef = document.createElement("li");
  // itemImgRef.classList.add("gallery__item");

  // const linkImgRef = document.createElement("a");
  // linkImgRef.classList.add("gallery__link");
  // linkImgRef.href = picture.original;

  // const imgRef = document.createElement("img");
  // imgRef.classList.add("gallery__image");
  // imgRef.src = picture.preview;
  // imgRef.setAttribute("data-source", picture.original);
  // imgRef.setAttribute("data-index", index++);
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
    "data-index": index++,

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
  // console.log(
  //   "Вот здесь, когда клацаешь по бекграунду почему то event.target !== (event.currentTarget"
  // );
  if (event.target.nodeName !== "IMG") {
    onCloseModal();
  }
}

function onClickArrow(event) {
  event.preventDefault();
  if (event.code === "ArrowRight") {
    if (currentIndex + 1 === gallery.length) {
      currentIndex = 0;
      return (modalImgRef.src = gallery[currentIndex].original);
    }
    modalImgRef.src = gallery[(currentIndex += 1)].original;
  }

  if (event.code === "ArrowLeft") {
    if (currentIndex - 1 < 0) {
      currentIndex = gallery.length;
    }
    modalImgRef.src = gallery[(currentIndex -= 1)].original;
  }
}

// function next() {}
// function prev() {}

const country = [
  { id: 1, title: "Afrika" },
  { id: 2, title: "Antarctika" },
  { id: 3, title: "Asia" },
  { id: 4, title: "America" },
];

const idx = country.findIndex((el) => el.title === "Asia");
console.log(idx); // 2
const result = country.find((el, i) => i === idx);
console.log(result); // {id: 3, title: "Asia"}
