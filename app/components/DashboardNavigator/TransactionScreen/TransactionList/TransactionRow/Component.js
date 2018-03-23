import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import relativeDate from 'relative-date'
import moment from 'moment'

import styles from './Styles'

const TransactionRowComponent = props => {
  const isCurrentUser = props.isCurrentUser
  // const username = isCurrentUser ? 'You' : props.message.user.email
  const username = isCurrentUser ? 'You' : props.transaction.user.email
  // const date = moment(props.message.createdAt).format('dddd, L')
  const date = moment(props.transaction.createdAt).format('dddd, L')
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.leftBox]}>
        <Text style={styles.textBig}>Withdrawl:
          <Text style={styles.textBold}> $20.00</Text>
        </Text>
        <Text style={styles.regularText}>Running Balance:
          <Text style={styles.textBold}> $1,500</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.rightBox]}>
        <Text style={styles.regularText}>{date}</Text>
        <Text style={styles.regularText} numberOfLines={1}>Notes:
          {/* <Text style={styles.textBold}> {props.message.text}</Text> */}
          <Text style={styles.textBold}> {props.transaction.inputValue}</Text>
        </Text>
        <Text style={styles.regularText}>{username}</Text>
      </View>
    </View>
  )
}

TransactionRowComponent.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
  // message: PropTypes.shape({
  //   createdAt: PropTypes.number.isRequired,
  //   text: PropTypes.string.isRequired,
  //   user: PropTypes.shape({
  //     email: PropTypes.string.isRequired
  //   })
  // }),
  transaction: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
    inputValue: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired
    })
  })
}

export default TransactionRowComponent
