import React from 'react'
import PropTypes from 'prop-types'

import BasicForm from '../BasicForm'

const SignUpFormComponent = props =>
  <BasicForm
    buttonTitle={'Signup'}
    onButtonPress={props.signup} />

SignUpFormComponent.propTypes = {
  signup: PropTypes.func.isRequired
}

export default SignUpFormComponent
