import React from 'react'
import { KeyboardAvoidingView, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation';

import TransactionList from './TransactionList'
import NewTransactionButtons from './NewTransactionButtons/Component';

import styles from './Styles'

const TransactionScreenComponent = props =>
  <View style={styles.container}>
    <TransactionList style={styles.list} />
    <NewTransactionButtons
      navigation={props.navigation}
      style={styles.buttons} />
  </View>

export default TransactionScreenComponent
