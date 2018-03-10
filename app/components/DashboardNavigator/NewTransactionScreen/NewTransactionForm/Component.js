import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity, Alert, Button } from 'react-native';
import PropTypes from 'prop-types'

import styles from './Styles'

class NewTransactionFormComponent extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder='Amount'
          returnKeyType='next'
          keyboardType='numeric'
          underlineColorAndroid={'transparent'} />

        <Button
          onPress={() => Alert.alert('You tapped the button!') }
          title="Press Me"
        />

      </View>
    );
  }
}

export default NewTransactionFormComponent
