import React, { Component } from 'react'
import { Text, Button, Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'

import TransactionScreen from './Component'
import LogoutButton from './LogoutButton'
import GroupsButton from './GroupsButton'

class TransactionScreenContainer extends Component {

  static navigationOptions = {
    title: 'Transactions',
    headerRight: <LogoutButton />,
    headerLeft: <GroupsButton />
  }

  render() {
    return (
      <TransactionScreen navigation={this.props.navigation} />
    )
  }
}

export default TransactionScreenContainer
