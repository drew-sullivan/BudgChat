import * as types from './actionTypes'
import firebaseService from '../../services/firebase'

const FIREBASE_REF_TRANSACTIONS = firebaseService.database().ref('Transactions')
const FIREBASE_REF_TRANSACTIONS_LIMIT = 200

export const sendTransaction = (inputValue, oldTotal) => {
  return (dispatch) => {
    dispatch(transactionLoading())
    const currentUser = firebaseService.auth().currentUser
    const createdAt = new Date().getTime()
    const newTotal = oldTotal + inputValue
    console.log(`
      Transaction received
      inputValue: ${inputValue}
      oldTotal: ${oldTotal}
      newTotal: ${newTotal}
    `)
    const transaction = {
      createdAt,
      inputValue,
      oldTotal,
      newTotal,
      user: {
        id: currentUser.uid,
        email: currentUser.email
      }
    }

    FIREBASE_REF_TRANSACTIONS.push().set(transaction, (error) => {
      if (error) {
        dispatch(transactionError(error.message))
      } else {
        dispatch(transactionSuccess())
      }
    })
  }
}

export const updateTransaction = inputValue => {
  return (dispatch) => {
    dispatch(transactionUpdateTransaction(inputValue))
  }
}

export const loadTransactions = () => {
  return (dispatch) => {
    FIREBASE_REF_TRANSACTIONS.limitToLast(FIREBASE_REF_TRANSACTIONS_LIMIT).on('value', (snapshot) => {
      dispatch(loadTransactionsSuccess(snapshot.val()))
    }, errorObject => {
      dispatch(loadTransactionsError(errorObject.transaction))
    })
  }
}

const transactionLoading = () => ({
  type: types.TRANSACTION_LOADING
})

const transactionSuccess = () => ({
  type: types.TRANSACTION_SUCCESS
})

const transactionError = error => ({
  type: types.TRANSACTION_ERROR,
  error
})

const transactionUpdateTransaction = inputValue => ({
  type: types.TRANSACTION_UPDATE,
  inputValue
})

const loadTransactionsSuccess = transactions => ({
  type: types.LOAD_TRANSACTIONS_SUCCESS,
  transactions
})

const loadTransactionError = error => ({
  type: types.LOAD_TRANSACTIONS_ERROR,
  error
})
