import { TabNavigator } from 'react-navigation'
import { COLOR_SCHEME } from '../../../assets/colorScheme'

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
    activeTintColor: COLOR_SCHEME.textDark,
    inactiveTintColor: COLOR_SCHEME.secondary,
    showIcon: true,
    scrollEnabled: false,
    indicatorStyle: {
      display: 'none',
    },
    style: {
      backgroundColor: COLOR_SCHEME.primary,
    },
  },
  tabBarPosition: 'bottom'
}

export default TabNavigator(routeConfigs, tabBarOptions)
