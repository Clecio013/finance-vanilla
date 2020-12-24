import '@testing-library/jest-dom/extend-expect'
import { transactions, createTransaction, getTransactionsTotal } from './transaction'

describe('Transaction', () => {
  beforeEach(() => {
    localStorage.removeItem('@transactions-vanilla')
    transactions.length = 0
  })

  it('Should create a new transaction', () => {
    const transaction = {
      name: 'banana',
      type: 'Compra',
      value: 12
    }

    createTransaction(transaction)

    expect(JSON.parse(localStorage.getItem('@transactions-vanilla'))).toEqual([transaction])
  })

  it('Should return transactions total', () => {
    const allTransactions = [{
      name: 'banana',
      type: 'Compra',
      value: 12
    },
    {
      name: 'biscoito',
      type: 'Venda',
      value: 14
    }]

    expect(getTransactionsTotal(allTransactions)).toBe(-2)
  })

  it('Shoud return an empty array if dont have item into localstorage', () => {
    expect(transactions).toEqual([])
  })

  it('Should break if don`t have a transaction type', () => {
    const transaction = {
      name: 'banana',
      type: 'dummy',
      value: 1200
    }

    const anotherTransaction = {
      name: 'grapes',
      type: 'other',
      value: 200
    }

    createTransaction(transaction)
    createTransaction(anotherTransaction)

    expect(getTransactionsTotal(transactions)).toBe(0)
  })
})
