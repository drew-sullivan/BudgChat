import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../../assets/colorScheme'

export default StyleSheet.create({
  buttonText: {
    fontSize: 40,
    color: COLOR_SCHEME.textDark,
  },
  buttonTextPressed: {
    fontSize: 40,
    color: COLOR_SCHEME.contrasting,
  },
  tH: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tHPressed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
