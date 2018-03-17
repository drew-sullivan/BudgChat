import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { sendTransaction, updateTransaction } from '../../../store/transaction'

import NewTransactionForm from './Component'

const NewTransactionFormContainer = props =>
  <NewTransactionForm
    sending={props.sending}
    sendTransaction={props.sendTransaction}
    updateTransaction={props.updateTransaction}
    inputValue={props.inputValue}
    sendingError={props.sendingError} />

const mapStateToProps = state => ({
  sending: state.transaction.sending,
  sendingError: state.transaction.sendingError,
  inputValue: state.transaction.inputValue
})

const mapDispatchToProps = {
  sendTransaction,
  updateTransaction
}

NewTransactionFormContainer.propTypes = {
  sending: PropTypes.bool.isRequired,
  sendTransaction: PropTypes.func.isRequired,
  updateTransaction: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
  sendingError: PropTypes.string
}


export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionFormContainer)

