import React, { Component } from 'react'
import { Image, Button } from 'react-native'

import TransactionScreen from './Component'

const moneyTransferImage = require('../../../images/icons8-initiate-money-transfer-25.png')

class TransactionScreenContainer extends Component {

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
    return (
      <TransactionScreen>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        {/* YOU NEED TO BE ABLE TO PASS THE PROPS DOWN TO THE CHILD (UI) COMPONENT */}
      </TransactionScreen>
    )
  }
}

export default TransactionScreenContainer
