import React from 'react'
import { Text, View, Button } from 'react-native'

import NewTransactionForm from './NewTransactionForm'

import styles from './Styles'

const NewTransactionScreenComponent = (props) =>
  <View style={styles.container}>
    <NewTransactionForm />
  </View>

export default NewTransactionScreenComponent
