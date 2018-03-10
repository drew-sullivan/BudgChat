import React from 'react'
import { KeyboardAvoidingView, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation';

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

import styles from './Styles'
import NewTransactionButton from './NewTransactionButton/Component';

const TransactionScreenComponent = (props) =>
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={90}>
    <MessagesList />
    <NewTransactionButton navigation={props.navigation}/>
  </KeyboardAvoidingView>

export default TransactionScreenComponent
