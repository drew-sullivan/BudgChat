import { StackNavigator } from 'react-navigation'

import TransactionScreen from './TransactionScreen'
import NewTransactionScreen from './NewTransactionScreen'

export default StackNavigator(
  {
    Transactions: { screen: TransactionScreen },
    NewTransaction: { screen: NewTransactionScreen }
  },
  {
    initialRouteName: 'Transactions',
  }
);
