import React, { Component } from 'react'
import { Text, View } from 'react-native';
import PropTypes from 'prop-types'

import TransactionRow from './Component'

import firebaseService from '../../../../../services/firebase'

class TransactionRowContainer extends Component {

  render() {
    const isCurrentUser = firebaseService.auth().currentUser.email == this.props.message.user.email;
    return (
      <TransactionRow
        message={this.props.message}
        isCurrentUser={isCurrentUser}/>
    );
  }
}

TransactionRowContainer.propTypes = {
  message: PropTypes.object.isRequired,
}

export default TransactionRowContainer
