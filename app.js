const buttonAnnually = document.querySelector('.price__title-button.--annually');
const buttonMonthly = document.querySelector('.price__title-button.--monthly');
const bgAnim = document.querySelector('.price__title-bgAnim');

buttonMonthly.addEventListener('click', () => {
  bgAnim.classList.add('anim');
});

buttonAnnually.addEventListener('click', () => {
  bgAnim.classList.remove('anim');
});

// menu 

const menuBurger = document.querySelector('.menu-burger');
const menuClose = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

menuBurger.addEventListener('click', function() {
  menu.classList.add('active');
  body.classList.add('scroll');
});

menuClose.addEventListener('click', function() {
  menu.classList.remove('active');
  body.classList.remove('scroll');
});