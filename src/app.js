import { $ } from './scripts/selector'
import { createTransaction, transactions } from './scripts/transaction';
import render from './scripts/render'
import './scripts/header';
import { renderSelectOptions } from './scripts/select'

import './assets/scss/main.scss';

const form = $('form');

window.addEventListener('load', () => {
  renderSelectOptions();

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

  name.value = null;
  value.value = null;
  renderSelectOptions();
});
