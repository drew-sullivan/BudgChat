import { StyleSheet } from 'react-native'
import { COLOR_SCHEME } from '../../../assets/colorScheme'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1
  },
  buttons: {
    flex: 1,
    marginBottom: 100,
    backgroundColor: 'red'
  }
})
