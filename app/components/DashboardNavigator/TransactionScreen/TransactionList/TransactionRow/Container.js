import React, { Component } from 'react'
import { Text, View } from 'react-native';
import PropTypes from 'prop-types'

import TransactionRow from './Component'

import firebaseService from '../../../../../services/firebase'

class TransactionRowContainer extends Component {

  render() {
    const isCurrentUser = firebaseService.auth().currentUser.email == this.props.transaction.user.email
    return (
      <TransactionRow
        transaction={this.props.transaction}
        isCurrentUser={isCurrentUser} />
    );
  }
}

TransactionRowContainer.propTypes = {
  transaction: PropTypes.object.isRequired,
}

export default TransactionRowContainer
