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
    backgroundColor: '#E91E63',
  },
  input: {
    flex: 4,
    backgroundColor: '#FFFFFF',
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


// .dark-primary-color    { background: #C2185B; }
// .default-primary-color { background: #E91E63; }
// .light-primary-color   { background: #F8BBD0; }
// .text-primary-color    { color: #FFFFFF; }
// .accent-color          { background: #00BCD4; }
// .primary-text-color    { color: #212121; }
// .secondary-text-color  { color: #757575; }
// .divider-color         { border-color: #BDBDBD; }
