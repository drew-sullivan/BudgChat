import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, Alert } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Styles'

class DepositButtonComponent extends Component {

  constructor() {
    super()

    this.handleButtonPress = () => {
      Alert.alert('You pressed Deposit!')
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleButtonPress}>
          <Image source={require('../../../../../../images/ic_add.png')} style={styles.button} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default DepositButtonComponent
