import Siema from 'siema';

const siema = new Siema();
console.log(siema);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => siema.prev());
next.addEventListener('click', () => siema.next());
