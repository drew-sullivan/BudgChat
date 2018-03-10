import React, { Component } from 'react'
import { Image, Button } from 'react-native'

import NewTransactionScreen from './Component'

const moneyTransferImage = require('../../../images/icons8-initiate-money-transfer-25.png')

class NewTransactionScreenContainer extends Component {

  static navigationOptions = {
    title: 'New Transaction'
  }

  render() {
    return (
      <NewTransactionScreen navigation={this.props.navigation} />
    )
  }
}

export default NewTransactionScreenContainer
