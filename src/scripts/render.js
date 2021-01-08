import { transformToReal } from './transformToReal';
import { $ } from '../utils/selector'
import { getTransactionsTotal } from './transaction'

const tbody = $('.extract__tbody');
const result = $('#total');
const profitOrLoss = $('#profitOrLoss')

const render = {
  tr: transaction => {
    const tr = document.createElement('tr');

    const line = `
      <tr>
        <td>
          ${transaction.type === 'Compra' ? '+' : '-'}
          ${transaction.name}
        </td>

        <td class='value'>
          ${transformToReal(transaction.value)}
        </td>
      </tr>
    `

    tr.innerHTML = line

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

export default render
