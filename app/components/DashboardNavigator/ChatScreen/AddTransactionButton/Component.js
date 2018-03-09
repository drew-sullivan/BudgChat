import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, Alert, Text } from 'react-native'

import styles from './Styles'

const AddTransactionButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={() => { Alert.alert('You tapped the button!') }}>

    <Image source={require('../../../../images/icons8-initiate-money-transfer-25.png')} />
    <Text>Add Transaction</Text>
  </TouchableOpacity>

// AddTransactionButtonComponent.propTypes = {
//   addTransaction: PropTypes.func.isRequired
// }

export default AddTransactionButtonComponent
