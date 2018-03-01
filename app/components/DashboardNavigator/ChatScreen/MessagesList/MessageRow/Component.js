import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import relativeDate from 'relative-date'
import moment from 'moment'

import styles from './Styles'
import translations from '../../../../../i18n'

const MESSAGE_TEXT_MARGIN = 50

const MessageRowComponent = props => {
  const isCurrentUser = props.isCurrentUser
  const username = isCurrentUser ? translations.t('you') : props.message.user.email
  const date = moment(props.message.createdAt).format('dddd, L')
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.leftBox]}>
        <Text style={styles.textBig}>Withdrawl:
          <Text style={styles.textBold}> $20.00</Text>
        </Text>
        <Text style={{fontSize: 12}}>Running Balance:
          <Text style={styles.textBold}> $1,500</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.rightBox]}>
        <Text style={{fontSize: 12}}>{date}</Text>
        <Text style={{fontSize: 12}} numberOfLines={1}>Notes:
          <Text style={styles.textBold}> {props.message.text}</Text>
        </Text>
        <Text style={{fontSize: 12}}>{username}</Text>
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
