// import { StackNavigator } from 'react-navigation'

// import ChatScreen from './ChatScreen'
// import TransactionScreen from './TransactionScreen'

// const routeConfig = {
//   Chat: { screen: ChatScreen },
//   Transactions: { screen: TransactionScreen },
// }

// export default StackNavigator(routeConfig)

import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'

import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json



const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
