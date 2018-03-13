import React, { Component } from 'react'
import { AppRegistry, Text, TextInput, View, Alert } from 'react-native'
import PropTypes from 'prop-types'

import InputButton from './InputButton'

import { withNavigation } from 'react-navigation'

import styles from './Styles'

const MAX_DIGITS_ON_SCREEN = 7
const BUTTON_VALUES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['00', 0, 'back']
];

class NewTransactionFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '0.00',
    };
  }

  render() {
    let len = this._getInputLength()
    return (
      <View style={styles.container}>
        <View style={styles.amount}>
          <Text style={this._getDisplayFontSize(len)}>${this.state.inputValue}</Text>
        </View>
        <View style={styles.input}>
          {this._renderInputButtons()}
        </View>
      </View>
    );
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        if (input === 'back') {
          return this._handleBack(input)
        } else {
          return this._handle00Input(input)
        }
    }
  }

  _getInputLength() {
    return this.state.inputValue.toString().length
  }

  _handleBack(input) {
    let inputValue
    if (this.state.inputValue < 0.1) {
      inputValue = '0.00'
    } else {
      // Lops off the farthest-right digit (without rounding) and includes a trailing zero -- ex. 0.10
      inputValue = (Math.floor((this.state.inputValue / 10) * 100) / 100).toFixed(2)
    }
    this.setState({ inputValue })
  }

  _handle00Input(double0) {
    let inputValue
    const len = this._getInputLength()
    if (this.state.inputValue === '0.00' || len >= MAX_DIGITS_ON_SCREEN) {
      return
    } else if (len === (MAX_DIGITS_ON_SCREEN - 1)) {
      inputValue = ((this.state.inputValue * 10) + 0).toFixed(2)
    } else {
      inputValue = ((this.state.inputValue * 100) + 0).toFixed(2)
    }
    this.setState({ inputValue })
  }

  _handleNumberInput(num) {
    let inputValue
    if (this.state.inputValue === '0.00') {
      if (num === 0) {
        return
      }
      inputValue = num / 100
    } else if (this._getInputLength() >= MAX_DIGITS_ON_SCREEN) {
      return
    } else {
      inputValue = ((this.state.inputValue * 10) + (num / 100)).toFixed(2)
    }
    this.setState({ inputValue })
  }

  _getDisplayFontSize(textLength) {
    let fontSize = {fontSize: 85}
    if (textLength >= 6) {
      fontSize = {fontSize: 75}
    }
    return fontSize
  }

  _renderInputButtons() {
    let inputPad = [];
    for (let i = 0; i < BUTTON_VALUES.length; i++) {
      let row = BUTTON_VALUES[i];
      let buttonRow = [];
      for (let j = 0; j < row.length; j++) {
        let buttonValue = row[j];
        buttonRow.push(
          <InputButton
            value={buttonValue}
            key={`${i}-${j}`}
            onPress={this._onInputButtonPressed.bind(this, buttonValue)} />
        );
      }
      inputPad.push(<View style={styles.inputRow} key={`row-${i}`}>{buttonRow}</View>)
    }
    return inputPad;
  }

}

export default withNavigation(NewTransactionFormComponent)
