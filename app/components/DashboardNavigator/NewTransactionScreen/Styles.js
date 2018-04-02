import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../assets/colorScheme'

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLOR_SCHEME.secondary
  },
  amount: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_SCHEME.secondary
  },
  input: {
    flex: 4,
    backgroundColor: COLOR_SCHEME.secondary,
    paddingBottom: 10,
    marginLeft: 25,
    marginRight: 25
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  displayText: {
    color: COLOR_SCHEME.textDark
  },
  notesPicker: {
    flex: 1,
  },
  actionButtons: {
    flex: 1
  }
})
