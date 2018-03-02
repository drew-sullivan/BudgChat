import React, { Component } from 'react'
import { View } from 'react-native'
import DepositButton from './DepositButton'
import WithdrawlButton from './WithdrawlButton'

const TransactionButtonBox = props =>
  <View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000'
  }}>
    <DepositButton />
    <WithdrawlButton />
  </View>

export default TransactionButtonBox
