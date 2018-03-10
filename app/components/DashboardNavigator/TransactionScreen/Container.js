import React, { Component } from 'react'

import { StackNavigator } from 'react-navigation';

import TransactionScreen from './Component'
import LogoutButton from './LogoutButton'

class TransactionScreenContainer extends Component {

  static navigationOptions = {
    title: 'Transactions',
    headerRight: <LogoutButton />
  }

  render() {
    return (
      <TransactionScreen navigation={this.props.navigation}/>
    )
  }
}

export default TransactionScreenContainer
