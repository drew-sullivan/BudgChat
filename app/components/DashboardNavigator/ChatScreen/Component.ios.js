import React from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'
import Balance from './Balance'
import AuthTabs from './AuthTabs'

import styles from './Styles'

const ChatScreenComponent = () =>
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={90}>
    <Balance />
    <AuthTabs />
    <MessagesList style={{flex: 3}}/>
    {/* <MessageForm /> */}
  </KeyboardAvoidingView>

export default ChatScreenComponent
