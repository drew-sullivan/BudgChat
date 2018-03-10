import React from 'react'
import { KeyboardAvoidingView, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation';

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

import styles from './Styles'
import NewTransactionButton from './NewTransactionButton/Component';

const TransactionScreenComponent = (props) =>
  <View style={styles.container}>
    <MessagesList />
    <NewTransactionButton navigation={props.navigation}/>
  </View>

export default TransactionScreenComponent
