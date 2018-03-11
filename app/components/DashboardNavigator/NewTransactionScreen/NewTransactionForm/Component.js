import React, { Component } from 'react'
import { AppRegistry, Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

import InputButton from './InputButton'

import { withNavigation } from 'react-navigation'

import styles from './Styles'

const BUTTON_OPTIONS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [0, '00', 'Back']
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
      <View>
        <Text style={[displaySizeStyles, {flex: 1, backgroundColor: 'yellow'}]}>${this.state.text}</Text>
        <View style={{flex: 4, backgroundColor: 'green'}}>
          {this.renderInputButtons()}
        </View>
      </View>
    );
  }

  renderInputButtons() {
    let views = [];
    for (var r = 0; r < BUTTON_OPTIONS.length; r++) {
        let row = BUTTON_OPTIONS[r];
        let inputRow = [];
        for (var i = 0; i < row.length; i++) {
            let input = row[i];
            inputRow.push(
                <InputButton value={input} key={r + "-" + i} />
            );
        }
        views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
    }
    return views;
  }
}

export default withNavigation(NewTransactionFormComponent)
