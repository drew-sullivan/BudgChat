import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../../assets/colorScheme'

export default StyleSheet.create({
  notesPicker: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR_SCHEME.secondary,
    paddingBottom: 20
  },
  notesPickerItem: {
    color: COLOR_SCHEME.textDark
  }
})
