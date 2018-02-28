import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderRadius: 5
  },
  bubbleView: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 8,
    padding: 8
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
