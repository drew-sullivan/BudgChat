import React from 'react'
import { KeyboardAvoidingView, Text, View, Button } from 'react-native'

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

import styles from './Styles'

const ChatScreenComponent = () =>
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={90}>
    <Button
      title="Go to Transactions"
      onPress={() => this.props.navigation.navigate('Transactions')}
    />
    <MessagesList />
    {/* <MessageForm /> */}
  </KeyboardAvoidingView>

export default ChatScreenComponent
