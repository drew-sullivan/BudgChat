import React, { Component } from 'react'
import { Picker } from 'react-native'

import styles from './Styles'

const Item = Picker.Item

const NOTE_VALUES = [
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

  render() {
    return (
      <Picker
        style={styles.notesPicker}
        selectedValue={this.state.note}
        onValueChange={(itemValue, itemIndex) => this.setState({note: itemValue})}
        itemStyle={styles.notesPickerItem}>
        {/* <Picker.Item label="Monkey" value="java" />
        <Picker.Item label="Giraffe" value="js" /> */}
        {this._renderPickerItems()}
      </Picker>
    );
  }

  _renderPickerItems() {
    items = []
    for (let i = 0; i < NOTE_VALUES.length; i++) {
      items.push(<Picker.Item label={NOTE_VALUES[i]} value={NOTE_VALUES[i]} key={NOTE_VALUES[i]} />)
    }
    return items
  }

}
