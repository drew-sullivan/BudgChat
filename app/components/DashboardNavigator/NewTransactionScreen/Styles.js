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
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_SCHEME.secondary
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40
  },
  displayText: {
    color: COLOR_SCHEME.textDark
  },
  notesPicker: {
    flex: 2
  }
})
