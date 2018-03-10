import React from 'react'
import { KeyboardAvoidingView, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation';

import TransactionList from './TransactionList'
import MessageForm from './MessageForm'
import NewTransactionButtons from './NewTransactionButtons/Component';

import styles from './Styles'

const TransactionScreenComponent = (props) =>
  <View style={styles.container}>
    <TransactionList />
    <NewTransactionButtons navigation={props.navigation}/>
  </View>

export default TransactionScreenComponent
