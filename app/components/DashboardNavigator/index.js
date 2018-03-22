import React from 'react'
import { Text, View } from 'react-native'
import { COLOR_SCHEME } from '../../assets/colorScheme'

import { StackNavigator } from 'react-navigation'

import TransactionScreen from './TransactionScreen'
import NewTransactionScreen from './NewTransactionScreen'

export default StackNavigator(
  {
    Transactions: { screen: TransactionScreen },
    NewTransaction: {
      screen: NewTransactionScreen
    }
  },
  {
    initialRouteName: 'Transactions',
    navigationOptions: {
      headerTintColor: COLOR_SCHEME.secondary,
      headerStyle: {
        backgroundColor: COLOR_SCHEME.contrasting
      }
    }
  }
);
