import * as types from './actionTypes'

const initialState = {
  sending: false,
  sendingError: null,
  inputValue: 0,
  transactions: {},
  loadTransactionsError: null,
  total: 0,
}

const transaction = (state = initialState, action) => {
  switch(action.type) {
    case types.TRANSACTION_LOADING:
      return { ...state, sending: true, sendingError: null }
    case types.TRANSACTION_ERROR:
      return { ...state, sending: false, sendingError: action.error }
    case types.TRANSACTION_SUCCESS:
      console.log(`Inside reducer: ${action.total}`)
      return { ...state, sending: false, sendingError: null, inputValue: 0, total: action.total }
    case types.TRANSACTION_UPDATE:
      return { ...state, sending: false, inputValue: action.inputValue, sendingError: null }
    case types.LOAD_TRANSACTIONS_SUCCESS:
      return { ...state, transactions: action.transactions, loadTransactionsError: null }
    case types.LOAD_TRANSACTIONS_ERROR:
      return { ...state, transactions: null, loadTransactionsError: action.error }
    default:
      return state
  }
}

export default transaction
