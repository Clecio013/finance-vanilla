import Td from '../components/Td';
import { transformToReal } from '../scripts/transformToReal';

export const $ = element => document.querySelector(element);

export const transactions = JSON.parse(localStorage.getItem('@transactions-vanilla')) || [];

const name = $('#name');
const value = $('#value');
const type = $('#type');
const tbody = $('.extract__tbody');
const result = $('#total');
const profitOrLoss = $('#profitOrLoss')

export const render = {
  tr: transaction => {
    const tr = document.createElement('tr');
    tr.innerHTML = Td({ ...transaction });

    tbody.appendChild(tr);
  },

  createTotal: transactions => {
    const total = getTransactionsTotal(transactions);
    result.textContent = transformToReal(total)

    profitOrLoss.textContent = total < 0 ? '[Prejuizo]' : '[Lucro]';
  },

  transactions: transactions => {
    transactions.forEach(transaction => {
      render.tr(transaction);
    });

    render.createTotal(transactions);
  }
};

export const createTransaction = () => {
  const transaction = {
    name: name.value,
    type: type.options[type.selectedIndex].text,
    value: Number(value.value)
  };

  transactions.push(transaction);

  localStorage.setItem('@transactions-vanilla', JSON.stringify(transactions));

  render.tr(transaction);
  render.createTotal(transactions);
};

export const getTransactionsTotal = transactions => {
  const { income, outcome } = transactions.reduce(
    (accumulator, transaction) => {
      switch (transaction.type) {
      case 'Venda':
        accumulator.outcome += Number(transaction.value);
        break;
      case 'Compra':
        accumulator.income += Number(transaction.value);
        break;
      default:
        break;
      }

      return accumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );

  return income - outcome;
};
