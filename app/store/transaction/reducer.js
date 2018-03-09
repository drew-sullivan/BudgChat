import * as types from './actionTypes'

const initialState = {
  sending: false,
  sendingError: null,
  amount: 0
}

const transactionState = (state = initialState, action) => {
  switch(action.type) {
    case types.TRANSACTION_LOADING:
      return { ...state, sending: true, sendingError: null }
    case types.TRANSACTION_SUCCESS:
      return { ...state, sending: false, sendingError: null, amount: 0 }
    case types.TRANSACTION_ERROR:
      return { ...state, sending: false, sendingError: action.error }
    case types.TRANSACTION_UPDATE:
      return { ...state, sending: false, amount: action.amount, sendingError: null }
    default:
      return state
  }
}

export default transactionState
