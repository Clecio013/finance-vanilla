import { render, createTransaction, transactions, $ } from './scripts/transaction';
import './scripts/header';
import './assets/style/main.scss';

const form = $('form');

window.addEventListener('load', () => {
  if (transactions.length > 0) {
    render.transactions(transactions);
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  createTransaction();
});
