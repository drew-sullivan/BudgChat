import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'
import { Container, Button, Icon, Text, Footer, FooterTab } from 'native-base';
import { withNavigation } from 'react-navigation'

import styles from './Styles'

class ActionButtonsComponent extends Component {

  constructor() {
    super()

    // this.handle

    this.handleButtonPress = () => {
      console.log(`DREW!!!  inputValue: ${this.props.finalValue}`)
      // this.props.sendTransaction(this.props.stateSnapshot.inputValue)
    }
  }

  render() {

    // console.log(`sendTransaction: ${this.props.sendTransaction}`)
    // console.log(`updateTransaction: ${this.props.updateTransaction}`)
    // console.log(`inputValue: ${this.props.inputValue}`)
    // console.log(`sendingError: ${this.props.sendingError}`)

    return (
      <Container style={styles.container}>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.goBack()} style={styles.button}>
              <Icon name="ios-close" />
              <Text>Cancel</Text>
            </Button>
            <Button vertical onPress={this.handleButtonPress}>
              <Icon name="ios-checkmark" />
              <Text>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }

}

export default withNavigation(ActionButtonsComponent)
