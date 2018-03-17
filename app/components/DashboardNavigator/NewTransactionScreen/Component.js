import React, { Component } from 'react'
import { AppRegistry, Text, TextInput, View, Alert } from 'react-native'
import PropTypes from 'prop-types'

import InputButton from './InputButton'
import ActionButtons from './ActionButtons'

import { withNavigation } from 'react-navigation'

import styles from './Styles'

const OPACITY_ENABLED = 1.0
const OPACITY_DISABLED = 0.2

const MAX_DIGITS_ON_SCREEN = 7
const BUTTON_VALUES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['00', 0, 'back']
];

class NewTransactionFormComponent extends Component {

  constructor() {
    super()

    this.state = {
      inputValue: '0.00',
      inputValueLength: 1
    }
  }

  render() {

    console.log(`sending: ${this.props.sending}`)
    console.log(`sendTransaction: ${this.props.sendTransaction}`)
    console.log(`updateTransaction: ${this.props.updateTransaction}`)
    console.log(`inputValue: ${this.props.inputValue}`)
    console.log(`sendingError: ${this.props.sendingError}`)




    const { params } = this.props.navigation.state;
    const isDeposit = params.isDeposit
    console.log(isDeposit)
    let len = this._getInputLength()
    return (
      <View style={styles.container}>
        <View style={styles.amount}>
          <Text style={[ this._getDisplayFontSize(len), styles.displayText ]}>${this.state.inputValue}</Text>
        </View>
        <View style={styles.input}>
          {this._renderInputButtons()}
        </View>
        <View style={styles.actionButtons}>
          <ActionButtons
            stateSnapshot={+this.state.inputValue}
            isDeposit />
        </View>
      </View>
    );
  }

  _onInputButtonPressed(input) {
    const currentState = this.state
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input, currentState)
      case 'string':
        if (input === 'back') {
          return this._handleBack(currentState)
        } else {
          return this._handle00Input(currentState)
        }
    }
  }

  _getInputLength() {
    return this.state.inputValue.toString().length
  }

  _handleBack(currentState) {
    let inputValue = currentState.inputValue
    let inputValueLength = currentState.inputValueLength
    if (inputValue < 0.1) {
      inputValue = '0.00'
      inputValueLength = 1
    } else {
      // Lops off the farthest-right digit (without rounding) and includes a trailing zero -- ex. 0.10
      inputValue = (Math.floor((this.state.inputValue / 10) * 100) / 100).toFixed(2)
      inputValueLength -= 1
    }
    this.setState({ ...currentState, inputValue, inputValueLength })
  }

  _handle00Input(currentState) {
    let inputValue = currentState.inputValue
    let inputValueLength = currentState.inputValueLength
    if (inputValueLength >= MAX_DIGITS_ON_SCREEN - 1 || inputValueLength === 1) {
      return
    } else {
      inputValue = ((this.state.inputValue * 100) + 0).toFixed(2)
      inputValueLength += 2
    }
    this.setState({ ...currentState, inputValue, inputValueLength })
  }

  _handleNumberInput(num, currentState) {
    let inputValue = currentState.inputValue
    let inputValueLength = currentState.inputValueLength
    if (inputValue === '0.00') {
      if (num === 0) {
        return
      }
      inputValue = num / 100
    } else if (inputValueLength >= MAX_DIGITS_ON_SCREEN) {
      return
    } else {
      inputValue = ((inputValue * 10) + (num / 100)).toFixed(2)
    }
    inputValueLength += 1
    this.setState({ ...currentState, inputValue, inputValueLength })
  }

  _getDisplayFontSize(textLength) {
    let fontSize = {fontSize: 85}
    if (textLength >= 6) {
      fontSize = {fontSize: 75}
    }
    return fontSize
  }

  _renderInputButtons() {
    const inputValueLength = this.state.inputValueLength
    const isStartingZeroes = inputValueLength === 1
    const backButtonOff = isStartingZeroes
    const double0Off = inputValueLength >= 6 || isStartingZeroes
    const single0Off = inputValueLength > 6 || isStartingZeroes
    const numberOff = inputValueLength > 6
    let inputPad = [];
    for (let i = 0; i < BUTTON_VALUES.length; i++) {
      let row = BUTTON_VALUES[i];
      let buttonRow = [];
      for (let j = 0; j < row.length; j++) {
        let buttonValue = row[j];
        if (buttonValue === 'back') {
          buttonRow.push(
            <InputButton
              value={buttonValue}
              key={`${i}-${j}`}
              disabled={backButtonOff}
              opacity={ backButtonOff ? OPACITY_DISABLED : OPACITY_ENABLED }
              onPress={this._onInputButtonPressed.bind(this, buttonValue)} />
          );
        } else if (buttonValue === '00') {
          buttonRow.push(
            <InputButton
              value={buttonValue}
              key={`${i}-${j}`}
              disabled={double0Off}
              opacity={ double0Off ? OPACITY_DISABLED : OPACITY_ENABLED }
              onPress={this._onInputButtonPressed.bind(this, buttonValue)} />
          );
        } else if (buttonValue === 0) {
          buttonRow.push(
            <InputButton
              value={buttonValue}
              key={`${i}-${j}`}
              disabled={single0Off}
              opacity={ single0Off ? OPACITY_DISABLED : OPACITY_ENABLED }
              onPress={this._onInputButtonPressed.bind(this, buttonValue)} />
          );
        } else {
          buttonRow.push(
            <InputButton
              value={buttonValue}
              key={`${i}-${j}`}
              disabled={numberOff}
              opacity={ numberOff ? OPACITY_DISABLED : OPACITY_ENABLED }
              onPress={this._onInputButtonPressed.bind(this, buttonValue)} />
          );
        }
      }
      inputPad.push(<View style={styles.inputRow} key={`row-${i}`}>{buttonRow}</View>)
    }
    return inputPad;
  }

}

export default withNavigation(NewTransactionFormComponent)
