import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Input, Item } from 'native-base';
import PropTypes from 'prop-types'

import { withNavigation } from 'react-navigation';

import styles from './Styles'

class NewTransactionFormComponent extends Component {

  constructor() {
    super()

    this.handleAmountChange = (amount) => {
      this.props.updateAmount(amount)
    }

    this.handleButtonPress = () => {
      this.props.sendTransaction(this.props.amount)
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.sendingError && this.props.sendingError) {
      Alert.alert('Error', this.props.sendingError)
    }
  }


  render() {
    return (
      <Container style={{width: '100%'}}>
        <Content>
        <Item style={{marginTop: 50, marginLeft: '10%', marginRight: '10%', height: 50}}>
          <Icon active name='logo-usd' />
          <Input placeholder='0.00'/>
        </Item>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => { this.props.navigation.goBack() }}>
              <Icon name="close" />
              <Text>Cancel</Text>
            </Button>
            <Button vertical onPress={() => { this.props.navigation.goBack() }}>
              <Icon name="checkmark" />
              <Text>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }



  // render() {
  //   const sending = this.props.sending
  //   const isButtonDisabled = sending
  //   // const opacity = isButtonDisabled ? OPACITY_DISABLED : OPACITY_ENABLED

  //   return (
  //     <View>
  //       {/* <View style={styles.container}>
  //         <Text style={[styles.dollarSign, styles.input]}>$</Text>
  //         <TextInput
  //           autoFocus
  //           style={[styles.amount, styles.input]}
  //           placeholder='0.00'
  //           returnKeyType='next'
  //           keyboardType='numeric'
  //           underlineColorAndroid={'transparent'} />
  //       </View> */}
  //       <Container style={{width: '100%'}}>
  //         <Item>
  //           <Icon active name='logo-usd' />
  //           <Input placeholder='Icon Textbox'/>
  //         </Item>
          // <Footer>
          //   <FooterTab>
          //     <Button vertical onPress={() => { this.props.navigation.goBack() }}>
          //       <Icon name="close" />
          //       <Text>Cancel</Text>
          //     </Button>
          //     <Button vertical onPress={() => { this.props.navigation.goBack() }}>
          //       <Icon name="checkmark" />
          //       <Text>Submit</Text>
          //     </Button>
          //   </FooterTab>
          // </Footer>
  //       </Container>
  //     </View>
  //   );
  // }
}

export default withNavigation(NewTransactionFormComponent)
