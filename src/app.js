import { $ } from './scripts/selector'
import { createTransaction, transactions } from './scripts/transaction';
import render from './scripts/render'
import './scripts/header';

import './assets/scss/main.scss';

const form = $('form');

window.addEventListener('load', () => {
  if (transactions.length > 0) {
    render.transactions(transactions);
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = $('#name');
  const value = $('#value');
  const type = $('#type');

  const transaction = {
    name: name.value,
    type: type.options[type.selectedIndex].text,
    value: Number(value.value)
  };

  createTransaction(transaction);

  render.tr(transaction);
  render.createTotal(transactions);

  name.value = null
  value.value = null
});
