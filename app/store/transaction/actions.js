import * as types from './actionTypes'
import firebaseService from '../../services/firebase'

const FIREBASE_REF_TRANSACTIONS = firebaseService.datebase().ref('Transactions')

export const addTransaction = amount => {
  return (dispatch) => {
    dispatch(transactionLoading())

    let currentUser = firebaseService.auth().currentUser
    let createdAt = new Date().getTime()
    let transaction = {
      createdAt,
      amount,
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

export const updateTransaction = (amount) => {
  return (dispatch) => {
    dispatch(chatUpdateMessage(amount))
  }
}

const transactionLoading = () => ({
  type: types.TRANSACTION_LOADING
})

const transactionError = error => ({
  type: types.TRANSACTION_ERROR,
  error
})

const transactionSuccess = () => ({
  type: types.TRANSACTION_SUCCESS
})

const updateTransaction = (isPositive, amount) => ({
  type: types.TRANSACTION_UPDATE

})
