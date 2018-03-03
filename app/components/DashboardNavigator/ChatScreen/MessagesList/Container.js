import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadMessages } from '../../../../store/chat/actions'
import { getChatItems } from '../../../../store/chat/selectors'

import MessageListComponent from './Component'

class MessagesListContainer extends Component {

  componentDidMount() {
    this.props.loadMessages()
  }

  render() {
    const data = getChatItems(this.props.messages);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
    return (
      <MessageListComponent
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

MessagesListContainer.propTypes = {
  messages: PropTypes.object,
  error: PropTypes.string,
  loadMessages: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer)
