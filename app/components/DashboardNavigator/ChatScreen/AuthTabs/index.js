import { TabNavigator } from 'react-navigation'

import TransactionScreen from './TransactionScreen'

const routeConfigs = {
  Login: {
    screen: TransactionScreen,
  },
  SignUp: {
    screen: TransactionScreen,
  },
}

const tabBarOptions = {
  tabBarOptions: {
    activeTintColor: '#88cc88',
    inactiveTintColor: '#aaaaaa',
    showIcon: true,
    scrollEnabled: false,
    indicatorStyle: {
      display: 'none',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
  tabBarPosition: 'bottom'
}

export default TabNavigator(routeConfigs, tabBarOptions)
