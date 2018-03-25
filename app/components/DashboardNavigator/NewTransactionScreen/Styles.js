import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../assets/colorScheme'

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  amount: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_SCHEME.secondary,
  },
  input: {
    flex: 4,
    backgroundColor: COLOR_SCHEME.secondary,
    paddingBottom: 30,
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  displayText: {
    color: COLOR_SCHEME.textDark
  },
  actionButtons: {
    flex: 1
  }
})
