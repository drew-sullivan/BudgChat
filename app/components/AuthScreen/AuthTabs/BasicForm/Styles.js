import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    flex: 4,
    backgroundColor: 'red',
    margin: 40,
  },
  formContainer: {
    flex: 5
  },
  textInput: {
    backgroundColor: '#FFF',
    height: 40,
    margin: 10,
    padding: 3,
  },
  button: {
    backgroundColor: '#F06292',
    height: 40,
    margin: 10,
    padding: 3,
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
})
