import React from 'react'
import { Text, View, Button } from 'react-native'

import styles from './Styles'

const TransactionScreenComponent = (props) =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Calculator-like Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => props.navigation.navigate('Details')}
    />
  </View>

export default TransactionScreenComponent
