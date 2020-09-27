import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';

const openModalBtnRef = document.querySelector('button[data-open-modal]');

const modalTemplate = document.querySelector('#modal');
const instance = basicLightbox.create(document.querySelector('template'));

openModalBtnRef.addEventListener('click', instance.show);
