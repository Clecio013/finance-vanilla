import { $ } from './transaction';

const navigation = $('.header__nav');
const menu = $('.header__menu');
const close = $('.header__close');

const toggleMenu = () => navigation.classList.toggle('active');

menu.onclick = () => toggleMenu();
close.onclick = () => toggleMenu();
