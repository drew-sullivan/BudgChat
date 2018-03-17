import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// import { }

import ActionButtonsComponent from './Component'

const ActionButtonsContainer = props =>
  <ActionButtonsComponent
    stateSnapshot={props.stateSnapshot}
    isDeposit={props.isDeposit} />

export default ActionButtonsContainer
