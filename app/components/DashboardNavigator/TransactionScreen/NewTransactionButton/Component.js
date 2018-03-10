import React from 'react'
import PropTypes from 'prop-types'
// import { TouchableOpacity, Image, Text } from 'react-native'
import { Container, Header, Content, Button, Icon, Text } from 'native-base';


import styles from './Styles'

const NewTransactionButtonComponent = props =>
  <Container style={styles.container}>
    <Button style={styles.button} iconLeft bordered success onPress={() => props.navigation.navigate('NewTransaction')}>
      <Icon name='arrow-round-up' />
      <Text>Deposit</Text>
    </Button>
    <Button style={styles.button} iconLeft bordered danger onPress={() => props.navigation.navigate('NewTransaction')}>
      <Icon name='arrow-round-down' />
      <Text>Withdrawl</Text>
    </Button>
  </Container>

export default NewTransactionButtonComponent
