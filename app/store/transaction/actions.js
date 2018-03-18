import * as types from './actionTypes'
import firebaseService from '../../services/firebase'

const FIREBASE_REF_TRANSACTIONS = firebaseService.database().ref('Transactions')

export const sendTransaction = inputValue => {
  return (dispatch) => {
    dispatch(transactionLoading())

    let currentUser = firebaseService.auth().currentUser
    let createdAt = new Date().getTime()
    let transaction = {
      createdAt,
      inputValue,
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
