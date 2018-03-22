import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../../assets/colorScheme'

export default StyleSheet.create({
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputButtonText: {
    fontSize: 40,
    color: COLOR_SCHEME.textDark
  }
});
