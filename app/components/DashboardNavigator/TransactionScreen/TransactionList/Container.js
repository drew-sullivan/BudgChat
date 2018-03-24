import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadTransactions } from '../../../../store/transaction/actions'
import { getTransactionItems } from '../../../../store/transaction/selectors'

import TransactionListComponent from './Component'

class TransactionListContainer extends Component {

  componentDidMount() {
    this.props.loadTransactions()
  }

  render() {
    const data = getTransactionItems(this.props.transactions).reverse()
    return (
      <TransactionListComponent
        data={data} />
    )
  }
}

const mapStateToProps = state => ({
  transactions: state.transaction.transactions,
  error: state.transaction.loadTransactionsError,
})

const mapDispatchToProps = {
  loadTransactions
}

TransactionListContainer.propTypes = {
  transactions: PropTypes.object,
  error: PropTypes.string,
  loadTransactions: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionListContainer)
