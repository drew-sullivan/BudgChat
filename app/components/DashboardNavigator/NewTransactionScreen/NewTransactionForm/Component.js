import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity, Alert, Button, Text } from 'react-native';
import PropTypes from 'prop-types'

import styles from './Styles'

class NewTransactionFormComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.dollarSign, styles.input]}>$</Text>
        <TextInput
          style={[styles.amount, styles.input]}
          placeholder='0.00'
          returnKeyType='next'
          keyboardType='numeric'
          underlineColorAndroid={'transparent'} />
      </View>
    );
  }
}

export default NewTransactionFormComponent
