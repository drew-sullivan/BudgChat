// import React from 'react'
// import { Text, View, Button } from 'react-native'

// import NewTransactionForm from './NewTransactionForm'

// import styles from './Styles'

// const NewTransactionScreenComponent = (props) =>
//   <View style={styles.container}>
//     <NewTransactionForm />
//   </View>

// export default NewTransactionScreenComponent

import React, { Component } from 'react'
import { AppRegistry, Text, TextInput, View, Alert } from 'react-native'
import PropTypes from 'prop-types'

import InputButton from './InputButton'

import { withNavigation } from 'react-navigation'

import styles from './Styles'

const BUTTON_VALUES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['00', 0, 'Back']
];

class NewTransactionFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const len = this.state.text.length
    let displaySizeStyles = {fontSize: 100}
    if (len >= 4 && len <= 6) {
      displaySizeStyles = {fontSize: 80}
    } else if (len >= 7) {
      displaySizeStyles = {fontSize: 65}
    }
    return (
      <View style={styles.container}>
        <View style={styles.amount}>
          {/* <Text style={displaySizeStyles}>${this.state.text}</Text> */}
        </View>
        <View style={styles.input}>
          {this._renderInputButtons()}
        </View>
      </View>
    );
  }

  _onInputButtonPressed(input) {
      alert(input)
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
