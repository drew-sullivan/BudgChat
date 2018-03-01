import React from 'react'
import { KeyboardAvoidingView, Text } from 'react-native'

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

import styles from './Styles'

const ChatScreenComponent = () =>
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={90}>
    {/* <BalanceDisplay /> */}
    <MessagesList />
    <MessageForm />
  </KeyboardAvoidingView>

export default ChatScreenComponent
