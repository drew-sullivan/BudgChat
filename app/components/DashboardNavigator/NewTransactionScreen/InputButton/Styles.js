import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../../assets/colorScheme'

export default StyleSheet.create({
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  inputButtonText: {
    fontSize: 40,
    color: COLOR_SCHEME.textDark,
  },
  pressed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'pink'
  }
});
