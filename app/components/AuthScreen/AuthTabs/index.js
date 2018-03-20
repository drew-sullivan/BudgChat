import { TabNavigator } from 'react-navigation'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const routeConfigs = {
  Login: {
    screen: LoginForm,
  },
  SignUp: {
    screen: SignUpForm,
  },
}

const tabBarOptions = {
  tabBarOptions: {
    activeTintColor: '#F06292',
    inactiveTintColor: '#607D8B',
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
