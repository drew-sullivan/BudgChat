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
  const alignItems = 'flex-end'
  const margin = isCurrentUser ? {marginLeft: MESSAGE_TEXT_MARGIN} : {marginRight: MESSAGE_TEXT_MARGIN}
  const username = isCurrentUser ? translations.t('you') : props.message.user.email
  const date = moment(props.message.createdAt).format('dddd, L')
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white'}}>
        <View style={{width: '55%', height: 75, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: 10}}>
          <Text style={{fontSize: 12, paddingBottom: 10}}>{username}</Text>
          <Text style={{fontSize: 12}} numberOfLines={2}>{props.message.text}</Text>
        </View>
        <View style={{width: '45%', height: 75, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 10}}>
          <Text style={{fontSize: 12, paddingBottom: 10}}>{date}</Text>
          <Text style={{fontSize: 12}}>Withdrawl: $20.00</Text>
          <Text style={{fontSize: 12}}>Running Balance: $1,500</Text>
        </View>
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
