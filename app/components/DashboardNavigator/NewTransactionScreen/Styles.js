import { StyleSheet } from 'react-native'

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
    backgroundColor: '#607D8B'
  },
  input: {
    flex: 4,
    backgroundColor: '#37474F'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  displayText: {
    color: '#FFFFFF'
  },
  actionButtons: {
    flex: 1
  }
})
