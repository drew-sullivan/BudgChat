import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Styles'

class WithdrawlButtonComponent extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}>
          {/* <Image /> */}
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default WithdrawlButtonComponent
