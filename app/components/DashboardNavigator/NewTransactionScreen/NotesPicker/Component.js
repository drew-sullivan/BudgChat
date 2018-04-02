import React, { Component } from 'react'
import { Picker } from 'react-native'

import styles from './Styles'

const Item = Picker.Item

const NOTE_OPTIONS = [
  'Restaurant',
  'Fun',
  'Gift',
  'Supplies',
  'Other'
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
        {this._renderPickerItems()}
      </Picker>
    );
  }

  _renderPickerItems() {
    items = []
    for (let i = 0; i < NOTE_OPTIONS.length; i++) {
      items.push(<Picker.Item label={NOTE_OPTIONS[i]} value={NOTE_OPTIONS[i]} key={NOTE_OPTIONS[i]} />)
    }
    return items
  }

}
