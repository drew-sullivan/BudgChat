import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './Styles';

export default class InputButton extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.inputButton}
        underlayColor="#FF69B4"
        onPress={this.props.onPress}>
        <Text style={styles.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    )
  }
}
