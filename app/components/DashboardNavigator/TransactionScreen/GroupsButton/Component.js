import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

// import styles from './Styles'

const GroupsButtonComponent = props =>
  <TouchableOpacity onPress={() => props.navigation.navigate('Groups')}>
    <Text>Groups</Text>
  </TouchableOpacity>

export default withNavigation(GroupsButtonComponent)
