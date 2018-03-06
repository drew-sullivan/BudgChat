// import { TabNavigator } from 'react-navigation'

// import ChatScreen from './ChatScreen'
// import TransactionScreen from './TransactionScreen'

// const routeConfigs = {
//   Chat: { screen: ChatScreen },
//   Transactions: { screen: TransactionScreen }
// }

// const tabBarOptions = {
//   tabBarOptions: {
//     activeTintColor: '#88cc88',
//     inactiveTintColor: '#aaaaaa',
//     showIcon: true,
//     scrollEnabled: false,
//     indicatorStyle: {
//       display: 'none',
//     },
//     style: {
//       backgroundColor: '#ffffff',
//     },
//   },
//   tabBarPosition: 'bottom'
// }

// export default TabNavigator(routeConfigs, tabBarOptions)


import { StackNavigator } from 'react-navigation'

import ChatScreen from './ChatScreen'

const routeConfig = {
  Chat: { screen: ChatScreen }
}

export default StackNavigator(routeConfig)
