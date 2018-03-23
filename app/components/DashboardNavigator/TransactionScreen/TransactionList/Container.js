import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import { loadMessages } from '../../../../store/chat/actions'
// import { getChatItems } from '../../../../store/chat/selectors'
import { loadTransactions } from '../../../../store/transaction/actions'
import { getTransactionItems } from '../../../../store/transaction/selectors'

import TransactionListComponent from './Component'

class TransactionListContainer extends Component {

  componentDidMount() {
    // this.props.loadMessages()
    this.props.loadTransactions()
  }

  render() {
    // const data = getChatItems(this.props.messages).reverse();
    const data = getTransactionItems(this.props.transactions).reverse()
    return (
      <TransactionListComponent
        data={data} />
    )
  }
}

const mapStateToProps = state => ({
  // messages: state.chat.messages,
  // error: state.chat.loadMessagesError,
  transactions: state.transaction.transactions,
  error: state.transaction.loadTransactionsError,
})

const mapDispatchToProps = {
  // loadMessages,
  loadTransactions
}

TransactionListContainer.propTypes = {
  // messages: PropTypes.object,
  // error: PropTypes.string,
  // loadMessages: PropTypes.func.isRequired,
  transactions: PropTypes.object,
  error: PropTypes.string,
  loadTransactions: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionListContainer)
