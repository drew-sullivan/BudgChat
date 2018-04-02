import React, { Component } from 'react'
import { Picker } from 'react-native'

import styles from './Styles'

const Item = Picker.Item;

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
        <Picker.Item label="Monkey" value="java" />
        <Picker.Item label="Giraffe" value="js" />
      </Picker>
    );
  }
}
