import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'space-between',
  },
  box: {
    height: 75,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  leftBox: {
    width: '55%',
    alignItems: 'flex-start',
  },
  rightBox: {
    width: '45%',
    alignItems: 'flex-end',
  },
  textBig: {
    fontSize: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },
  userText: {
    flex: 1,
    color: 'black',
    fontSize: 14,
  },
  messageText: {
    flex: 1,
    color: 'black',
    fontSize: 16
  }
})
