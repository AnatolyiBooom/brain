

let burger = document.querySelector('.header__burger');

let navList = document.querySelector('.header__nav');
let body = document.querySelector('body');

burger?.addEventListener('click', () => {
    burger?.classList.toggle('burger--active');
    navList?.classList.toggle('nav--active');
    body?.classList.toggle('body--stop');
});