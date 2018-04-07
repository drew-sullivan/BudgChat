import React from 'react'
import PropTypes from 'prop-types'

import NotesPickerComponent from './Component'

const NotesPickerContainer = props =>
  <NotesPickerComponent
    updateState={props.updateState}
    isDeposit={props.isDeposit} />

export default NotesPickerContainer
