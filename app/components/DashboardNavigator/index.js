import React from 'react'
import { Text, View } from 'react-native'

import { StackNavigator } from 'react-navigation'

import TransactionScreen from './TransactionScreen'
import NewTransactionScreen from './NewTransactionScreen'

export default StackNavigator(
  {
    Transactions: { screen: TransactionScreen },
    NewTransaction: {
      screen: NewTransactionScreen,
      navigationOptions: {
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#C2185B'
        }
      }
    }
  },
  {
    initialRouteName: 'Transactions',
  }
);
