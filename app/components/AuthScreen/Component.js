import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Alert, Text } from 'react-native'

import AuthTabs from './AuthTabs'
import LoadingIndicator from './LoadingIndicator'

import styles from './Styles'

class AuthScreenComponent extends Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.error && this.props.error) {
      Alert.alert('Error', this.props.error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <AuthTabs style={{}} />
        {this.props.loading && <LoadingIndicator />}
      </View>
    )
  }
}

AuthScreenComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default AuthScreenComponent
