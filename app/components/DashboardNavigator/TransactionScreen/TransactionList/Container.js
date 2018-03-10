import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadMessages } from '../../../../store/chat/actions'
import { getChatItems } from '../../../../store/chat/selectors'

import TransactionListComponent from './Component'

class TransactionListContainer extends Component {

  componentDidMount() {
    this.props.loadMessages()
  }

  render() {
    const data = getChatItems(this.props.messages).reverse();
    return (
      <TransactionListComponent
        data={data} />
    )
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages,
  error: state.chat.loadMessagesError
})

const mapDispatchToProps = {
  loadMessages
}

TransactionListContainer.propTypes = {
  messages: PropTypes.object,
  error: PropTypes.string,
  loadMessages: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionListContainer)
