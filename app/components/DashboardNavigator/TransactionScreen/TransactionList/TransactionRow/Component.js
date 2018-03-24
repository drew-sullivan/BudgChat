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
  const inputValue = props.transaction.inputValue
  const transactionType = inputValue < 0 ? 'Withdrawl' : 'Deposit'
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.leftBox]}>
        <Text style={styles.textBig}>{transactionType}:
          {/* <Text style={styles.textBold}> {inputValue}</Text> */}
          <Text style={styles.textBold}>
            <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </Text>
        </Text>
        <Text style={styles.regularText}>Running Balance:
          <Text style={styles.textBold}> $1,500</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.rightBox]}>
        <Text style={styles.regularText}>{date}</Text>
        <Text style={styles.regularText} numberOfLines={1}>Notes:
          <Text style={styles.textBold}>[notes]</Text>
        </Text>
        <Text style={styles.regularText}>{username}</Text>
      </View>
    </View>
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
