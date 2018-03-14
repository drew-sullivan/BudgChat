import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { Container, Button, Icon, Footer, FooterTab } from 'native-base';


import styles from './Styles';

export default class InputButton extends Component {
  render() {
    return (
      <TouchableHighlight style={[styles.inputButton, {opacity: this.props.opacity}]}
        disabled={this.props.disabled}
        underlayColor="#FF69B4"
        onPress={this.props.onPress}>
        {this._getContent()}
      </TouchableHighlight>
    )
  }

  _getContent() {
    if (this.props.value === 'back') {
      return <Icon style={styles.inputButtonText} name='ios-backspace' />
    } else {
      return <Text style={styles.inputButtonText}>{this.props.value}</Text>
    }
  }

}
