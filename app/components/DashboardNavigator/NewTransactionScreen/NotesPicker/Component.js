import React, { Component } from 'react'
import { Picker } from 'react-native'

import styles from './Styles'

const Item = Picker.Item

const WITHDRAWL_OPTIONS = [
  'Restaurant',
  'Fun',
  'Gift',
  'Supplies',
  'Other'
]

const DEPOSIT_OPTIONS = [
  'Budget',
  'Windfall',
]

export default class NotesPickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
  }

  handleChange = (itemValue) => {
    this.props.updateState(itemValue)
    this.setState({note: itemValue})
  }

  render() {
    return (
      <Picker
        style={styles.notesPicker}
        selectedValue={this.state.note}
        onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue)}
        itemStyle={styles.notesPickerItem} >
        {this.props.isDeposit ? this._renderDepositPicker() : this._renderWithdrawlPicker()}
      </Picker>
    );
  }

  _renderWithdrawlPicker() {
    items = []
    for (let i = 0; i < WITHDRAWL_OPTIONS.length; i++) {
      items.push(<Picker.Item label={WITHDRAWL_OPTIONS[i]} value={WITHDRAWL_OPTIONS[i]} key={WITHDRAWL_OPTIONS[i]} />)
    }
    return items
  }

  _renderDepositPicker() {
    items = []
    for (let i = 0; i < DEPOSIT_OPTIONS.length; i++) {
      items.push(<Picker.Item label={DEPOSIT_OPTIONS[i]} value={DEPOSIT_OPTIONS[i]} key={DEPOSIT_OPTIONS[i]} />)
    }
    return items
  }

}
