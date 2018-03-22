import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'

import styles from './Styles'

class BasicFormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', };

    this.handleEmailChange = (email) => {
      this.setState({email: email})
    }

    this.handlePasswordChange = (password) => {
      this.setState({password: password})
    }

    this.handleButtonPress = () => {
      this.props.onButtonPress(this.state.email, this.state.password)
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>BudgChat</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Email'
              returnKeyType='next'
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={this.handleEmailChange}
              value={this.state.email}
              underlineColorAndroid={'transparent'} />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              secureTextEntry={true}
              returnKeyType='done'
              onChangeText={this.handlePasswordChange}
              value={this.state.password}
              underlineColorAndroid={'transparent'} />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleButtonPress}>
            <Text style={styles.buttonTitle}>{this.props.buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

BasicFormComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
}

export default BasicFormComponent
