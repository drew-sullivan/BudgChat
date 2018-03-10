import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Styles'

class BalanceDisplayComponent extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.balanceAmount}>$1,000,000.00</Text>
      </View>
    )
  }
}

export default BalanceDisplayComponent
