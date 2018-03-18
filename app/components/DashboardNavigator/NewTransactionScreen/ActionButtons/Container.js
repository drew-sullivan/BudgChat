import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { sendTransaction } from '../../../../store/transaction'

import ActionButtonsComponent from './Component'

const ActionButtonsContainer = props =>
  <ActionButtonsComponent
    finalValue={props.inputValue}
    sendTransaction={props.sendTransaction}
    sendingError={props.sendingError}
    />

const mapStateToProps = state => ({
  sending: state.transaction.sending,
  sendingError: state.transaction.sendingError,
  inputValue: state.transaction.inputValue
})

const mapDispatchToProps = {
  sendTransaction
}

ActionButtonsContainer.propTypes = {
  sendTransaction: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
  sendingError: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtonsContainer)
