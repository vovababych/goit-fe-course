'use strict';

import gallery from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const modalBtnRef = document.querySelector(
  "button[data-action='close-lightbox']",
);
const modalImgRef = document.querySelector('.lightbox__image');
let currentIndex = 0;

galleryRef.addEventListener('click', onOpenModal);

createGallery();

function createGallery() {
  const arr = gallery.map((picture, index) => createNode(picture, index));
  galleryRef.append(...arr);

  function createNode(picture, index) {
    const itemAttrs = {
      class: 'gallery__item',
    };

    const linkAttrs = {
      class: 'gallery__link',
      href: picture.original,
    };

    const imgAttrs = {
      class: 'gallery__image',
      src: picture.preview,
      'data-source': picture.original,
      'data-index': index,
      alt: picture.description,
    };

    const li = createElement('li', itemAttrs);
    const a = createElement('a', linkAttrs);
    const img = createElement('img', imgAttrs);
    li.appendChild(a);
    a.appendChild(img);
    return li;
  }

  function createElement(name, attrs) {
    const element = document.createElement(name);
    Object.entries(attrs).forEach(([key, value]) =>
      element.setAttribute(key, value),
    );
    return element;
  }
}

function onOpenModal() {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;
  openModal();
  const arrImages = Array.from(document.querySelectorAll('.gallery__image'));

  modalBtnRef.addEventListener('click', onCloseModal);
  modalRef.addEventListener('click', onClickBg);
  window.addEventListener('keydown', onPressKey);

  function openModal() {
    modalRef.classList.add('is-open');
    modalImgRef.src = event.target.dataset.source;
    modalImgRef.alt = event.target.alt;
    currentIndex = +event.target.dataset.index;
  }

  function onClickBg() {
    // console.log(
    //   "Вот здесь, когда клацаешь по бекграунду почему то event.target !== (event.currentTarget"
    // );
    if (event.target.nodeName !== 'IMG') onCloseModal();
  }

  function onCloseModal() {
    modalRef.classList.remove('is-open');
    modalImgRef.src = '';
    modalImgRef.alt = '';
    modalBtnRef.removeEventListener('click', onCloseModal);
    window.removeEventListener('keydown', onPressKey);
    window.removeEventListener('click', onClickBg);
  }

  function onPressKey() {
    if (event.code === 'Escape') onCloseModal();
    if (event.code === 'ArrowLeft') toPrevImg();
    if (event.code === 'ArrowRight') toNextImg();
  }

  function toPrevImg() {
    if (currentIndex - 1 < 0) {
      currentIndex = arrImages.length;
    }
    modalImgRef.src = arrImages[(currentIndex -= 1)].dataset.source;
  }

  function toNextImg() {
    if (currentIndex + 1 === arrImages.length) {
      currentIndex = 0;
      return (modalImgRef.src = arrImages[currentIndex].dataset.source);
    }
    modalImgRef.src = arrImages[(currentIndex += 1)].dataset.source;
  }
}
