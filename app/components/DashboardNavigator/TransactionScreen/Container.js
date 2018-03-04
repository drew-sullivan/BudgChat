import React, { Component } from 'react'
import { Image } from 'react-native'

import TransactionScreen from './Component'

const moneyTransferImage = require('../../../images/icons8-initiate-money-transfer-25.png')

class TransactionScreenContainer extends Component {

  static navigationOptions = {
    title: 'Transactions',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={moneyTransferImage}
        style={{tintColor: tintColor}}
      />
    )
  }

  render() {
    return (
      <TransactionScreen />
    )
  }
}

export default TransactionScreenContainer
