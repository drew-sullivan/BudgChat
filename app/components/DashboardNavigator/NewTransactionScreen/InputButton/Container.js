import React from 'react'

import InputButton from './Component'

const InputButtonContainer = (props) =>
  <InputButton
    value={props.value}
    opacity={props.opacity}
    onPress={props.onPress} />

export default InputButtonContainer
