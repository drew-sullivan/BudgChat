import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button, Icon, Text, Footer, FooterTab } from 'native-base';

import styles from './Styles'

const NewTransactionButtonComponent = props =>
  <Footer style={styles.buttonContainer}>
    <FooterTab>
      <Button vertical onPress={() => props.navigation.navigate('NewTransaction', { isDeposit: true })}>
        <Icon style={styles.textColor} name="arrow-round-up" />
        <Text style={styles.textColor} >Make a Deposit</Text>
      </Button>
      <Button vertical onPress={() => props.navigation.navigate('NewTransaction', { isDeposit: false })}>
        <Icon style={styles.textColor} name="arrow-round-down" />
        <Text style={styles.textColor}>Make a Withdrawl</Text>
      </Button>
    </FooterTab>
  </Footer>

export default NewTransactionButtonComponent
