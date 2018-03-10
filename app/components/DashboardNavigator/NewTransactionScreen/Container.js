import React, { Component } from 'react'
import { Image, Button } from 'react-native'

import NewTransactionScreen from './Component'

const moneyTransferImage = require('../../../images/icons8-initiate-money-transfer-25.png')

class NewTransactionScreenContainer extends Component {

  static navigationOptions = {
    title: 'New Transaction',
    headerRight: <Button
      onPress={() => {
        Alert.alert('You tapped the button!');
      }}
      title="Press Me"
    />
  }

  render() {
    console.log(this.props.navigation)
    return (
      <NewTransactionScreen navigation={this.props.navigation} />
    )
  }
}

export default NewTransactionScreenContainer
