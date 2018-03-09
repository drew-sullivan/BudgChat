import React from 'react'
import { KeyboardAvoidingView, Text, View, Button } from 'react-native'

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

import styles from './Styles'
import AddTransactionButton from './AddTransactionButton/Component';

const ChatScreenComponent = () =>
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={90}>
    <MessagesList />
    <AddTransactionButton />
    {/* <MessageForm /> */}
  </KeyboardAvoidingView>

export default ChatScreenComponent
