import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, Text } from 'react-native'

import styles from './Styles'

const NewTransactionButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.navigation.navigate('NewTransaction')}>

    <Image source={require('../../../../images/icons8-initiate-money-transfer-25.png')} />
    <Text>New Transaction</Text>
  </TouchableOpacity>

export default NewTransactionButtonComponent
