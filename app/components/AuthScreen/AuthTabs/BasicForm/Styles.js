import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../../assets/colorScheme'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
  titleContainer: {
    flex: 3,
    margin: 40,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    color: COLOR_SCHEME.textDark,
    textShadowColor: COLOR_SCHEME.contrasting,
    textShadowOffset: { width: -4, height: 5 },
    textShadowRadius: 0,
    fontFamily: 'Courier',
  },
  formContainer: {
    flex: 5,
  },
  textInputContainer: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: COLOR_SCHEME.textDark,
    margin: 10,
  },
  textInput: {
    backgroundColor: COLOR_SCHEME.secondary,
    height: 40,
    margin: 5,
    padding: 3,
  },
  button: {
    backgroundColor: COLOR_SCHEME.accent,
    height: 50,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonTitle: {
    color: COLOR_SCHEME.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  }
})
