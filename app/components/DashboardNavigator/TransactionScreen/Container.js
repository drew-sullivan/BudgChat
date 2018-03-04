import React, { Component } from 'react'

import TransactionScreen from './Component'

class TransactionScreenContainer extends Component {

  static navigationOptions = {
    title: 'Transactions',
  }

  render() {
    return (
      <TransactionScreen />
    )
  }
}

export default TransactionScreenContainer
