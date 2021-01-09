export const transactions = JSON.parse(localStorage.getItem('@transactions-vanilla')) || [];

export const createTransaction = (transaction) => {
  transactions.push(transaction);
  localStorage.setItem('@transactions-vanilla', JSON.stringify(transactions));
};

export const getTransactionsTotal = transactions => {
  const { income, outcome } = transactions.reduce(
    (accumulator, transaction) => {
      switch (transaction.type) {
      case 'Compra':
        accumulator.outcome += Number(transaction.value);
        break;
      case 'Venda':
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
