import './assets/style/main.scss';

export const $ = element => document.querySelector(element);

window.addEventListener('load', () => {
  const menu = $('.header__menu')
  const close = $('.header__close')
  const headerDrawer = $('.header__drawer')

  const toggleMenu = () => headerDrawer.classList.toggle('active');

  menu.onclick = () => toggleMenu();
  close.onclick = () => toggleMenu();
})
