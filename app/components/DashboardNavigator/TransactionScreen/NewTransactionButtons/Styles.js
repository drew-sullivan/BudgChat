import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../../assets/colorScheme'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: COLOR_SCHEME.primary,
  },
  textColor: {
    color: COLOR_SCHEME.textDark,
  }
})
