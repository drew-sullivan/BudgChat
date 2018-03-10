import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button, Icon, Text, Footer, FooterTab } from 'native-base';

import styles from './Styles'

const NewTransactionButtonComponent = props =>
  <Container style={styles.container}>
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => props.navigation.navigate('NewTransaction',{ add: true })}>
          <Icon name="arrow-round-up" />
          <Text>Make a Deposit</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('NewTransaction',{ add: false })}>
          <Icon name="arrow-round-down" />
          <Text>Make a Withdraw</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>

export default NewTransactionButtonComponent
