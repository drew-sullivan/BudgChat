import React, { Component } from 'react'

import { StackNavigator } from 'react-navigation';

import ChatScreen from './Component'
import LogoutButton from './LogoutButton'

class ChatScreenContainer extends Component {

  static navigationOptions = {
    title: 'Chat',
    headerRight: <LogoutButton />
  }

  render() {
    return (
      <ChatScreen test={nav}/>
    )
  }
}

export default ChatScreenContainer
