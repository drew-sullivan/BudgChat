import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { COLOR_SCHEME } from '../../../../assets/colorScheme'

import { Container, Button, Icon, Footer, FooterTab } from 'native-base';

import styles from './Styles';

export default class InputButton extends Component {

  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }

  _onHideUnderlay() {
    this.setState({ pressStatus: false });
  }

  _onShowUnderlay() {
    this.setState({ pressStatus: true });
  }

  render() {
    const opacity = this.props.opacity
    const active = this.state.pressStatus
    return (
      <TouchableHighlight
        style={ active ? [styles.tHPressed, {opacity}] : [styles.tH, {opacity}]}
        disabled={this.props.disabled}
        underlayColor={COLOR_SCHEME.textDark}
        onPress={this.props.onPress}
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        onShowUnderlay={this._onShowUnderlay.bind(this)} >
        {this._getContent(active)}
      </TouchableHighlight>
    )
  }

  _getContent(active) {
    if (this.props.value === 'back') {
      return <Icon style={active ? styles.buttonTextPressed : styles.buttonText } name='ios-backspace' />
    } else {
      return <Text style={active ? styles.buttonTextPressed : styles.buttonText }>{this.props.value}</Text>
    }
  }

}
