import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../../../assets/colorScheme'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLOR_SCHEME.textDark,
    justifyContent: 'space-between',
  },
  box: {
    height: 75,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: COLOR_SCHEME.secondary,
    justifyContent: 'space-between',
  },
  leftBox: {
    width: '60%',
    alignItems: 'flex-start',
    borderLeftWidth: 15,
  },
  rightBox: {
    width: '40%',
    alignItems: 'flex-end',
  },
  textBig: {
    fontSize: 25,
    color: COLOR_SCHEME.textDark,
  },
  textBold: {
    fontWeight: 'bold',
    color: COLOR_SCHEME.textDark,
  },
  regularText: {
    fontSize: 12,
    color: COLOR_SCHEME.textDark,
  },
})
