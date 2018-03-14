import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button, Icon, Text, Footer, FooterTab } from 'native-base';
import { withNavigation } from 'react-navigation'

import styles from './Styles'

const ActionButtonsComponent = props =>
  <Container style={styles.container}>
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => props.navigation.goBack()}>
          <Icon name="ios-close" />
          <Text>Cancel</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.goBack()}>
          <Icon name="ios-checkmark" />
          <Text>Submit</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>

export default withNavigation(ActionButtonsComponent)
