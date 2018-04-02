import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import NumberFormat from 'react-number-format'
import relativeDate from 'relative-date'
import moment from 'moment'

import styles from './Styles'

const TransactionRowComponent = props => {
  const isCurrentUser = props.isCurrentUser
  const username = isCurrentUser ? 'You' : props.transaction.user.email
  const date = moment(props.transaction.createdAt).format('dddd, L')
  const inputValue = props.transaction.inputValue || 0
  const borderLeftColor = inputValue > 0 ? 'green' : 'red'
  const runningBalance = props.transaction.runningBalance || 0
  const notes = props.transaction.note || 'None'
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.leftBox, {borderLeftColor}]}>
        <Text style={styles.textBig}>
          <Text style={styles.textBold}>{_getPrintableNumber(inputValue)}</Text>
        </Text>
        <Text style={styles.regularText}>Running Balance:
          <Text style={styles.textBold}>&nbsp;{_getPrintableNumber(runningBalance)}</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.rightBox]}>
        <Text style={styles.regularText}>{date}</Text>
        <Text style={styles.regularText} numberOfLines={1}>Notes:
          <Text style={styles.textBold}>&nbsp;{notes}</Text>
        </Text>
        <Text style={styles.regularText}>{username}</Text>
      </View>
    </View>
  )
}

_getPrintableNumber = (num) => {
  return (
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(num)
  )
}

TransactionRowComponent.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
  transaction: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
    inputValue: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  })
}

export default TransactionRowComponent
