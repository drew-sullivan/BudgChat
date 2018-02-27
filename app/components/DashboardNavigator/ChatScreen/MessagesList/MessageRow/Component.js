import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import relativeDate from 'relative-date'
import moment from 'moment'

import styles from './Styles'
import translations from '../../../../../i18n'

const MESSAGE_TEXT_MARGIN = 0

const MessageRowComponent = props => {
  const isCurrentUser = props.isCurrentUser
  const alignItems = 'flex-end'
  const username = isCurrentUser ? translations.t('you') : props.message.user.email
  const relDate = relativeDate(new Date(props.message.createdAt))
  const date = moment(props.message.createdAt).format('dddd, L [at] h:mma')
  return (
    <View style={styles.container}>
      <View style={ [styles.bubbleView, {alignItems}] }>
        <Text style={styles.messageText}>{props.message.text}</Text>
        <Text style={styles.userText}>{relDate} - {date}</Text>
        <Text style={styles.userText}>{username}</Text>
      </View>
    </View>
  )
}

MessageRowComponent.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired
    })
  })
}

export default MessageRowComponent
