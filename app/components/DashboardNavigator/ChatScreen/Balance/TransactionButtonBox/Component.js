import React, { Component } from 'react'
import { View } from 'react-native'
import DepositButton from './DepositButton'
import WithdrawlButton from './WithdrawlButton'

import styles from './Styles'

const TransactionButtonBox = props =>
  <View style={styles.container}>
    <WithdrawlButton />
    <DepositButton />
  </View>

export default TransactionButtonBox
