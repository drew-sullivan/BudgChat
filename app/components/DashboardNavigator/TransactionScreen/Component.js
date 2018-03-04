import React from 'react'
import { Text, View, Button } from 'react-native'

import styles from './Styles'

const TransactionScreenComponent = () =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Details... again"
      onPress={() => this.props.navigation.navigate('Transactions')}
    />
    <Button
      title="Go back"
      onPress={() => this.props.navigation.goBack()}
    />
  </View>

export default TransactionScreenComponent
