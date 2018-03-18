import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateTransaction } from '../../../store/transaction'

import NewTransactionForm from './Component'

const NewTransactionFormContainer = props =>
  <NewTransactionForm
    updateTransaction={props.updateTransaction}
  />

const mapStateToProps = state => ({
  inputValue: state.transaction.inputValue
})

const mapDispatchToProps = {
  updateTransaction
}



export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionFormContainer)
