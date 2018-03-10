import { StackNavigator } from 'react-navigation'

import ChatScreen from './ChatScreen'
import TransactionScreen from './TransactionScreen'
import HomeScreen from './HomeScreen/Component'
import DetailsScreen from './DetailsScreen/Component'

export default StackNavigator(
  {
    Chat: { screen: ChatScreen },
    AddTransaction: { screen: TransactionScreen },
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: 'Home',
  }
);
