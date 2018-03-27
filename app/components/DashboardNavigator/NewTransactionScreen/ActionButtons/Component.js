import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'
import { Container, Button, Icon, Text, Footer, FooterTab } from 'native-base'
import { withNavigation } from 'react-navigation'

import styles from './Styles'

class ActionButtonsComponent extends Component {

  constructor() {
    super()

    this.handleButtonPress = () => {
      console.log(this.props.num)
      console.log(this.props.oldTotal)
      this.props.sendTransaction(this.props.num, this.props.oldTotal)
      this.props.navigation.goBack()
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Footer style={styles.buttonContainer}>
          <FooterTab>
            <Button vertical
              onPress={() => this.props.navigation.goBack()}
              style={styles.button} >
              <Icon style={styles.textColor} name="ios-close" />
              <Text style={styles.textColor}>Cancel</Text>
            </Button>
            <Button vertical
              onPress={this.handleButtonPress}>
              <Icon style={styles.textColor} name="ios-checkmark" />
              <Text style={styles.textColor}>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }

}

export default withNavigation(ActionButtonsComponent)
