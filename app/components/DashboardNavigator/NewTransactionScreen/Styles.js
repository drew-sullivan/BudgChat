import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    display: 'flex',
    flexDirection: 'column'
  },
  amount: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    flex: 2,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  displayText: {
    color: 'white',
    fontWeight: '200',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 0.25
  },
  actionButtons: {
    flex: .59,
    borderWidth: 1,
    borderColor: '#d6d7da',
    justifyContent: 'center'
  }
})
