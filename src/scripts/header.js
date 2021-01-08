import { $ } from '../utils/selector'

const navigation = $('.header__drawer');
const menu = $('.header__menu');
const close = $('.header__close');

const toggleMenu = () => navigation.classList.toggle('active');

menu.onclick = () => toggleMenu();
close.onclick = () => toggleMenu();
