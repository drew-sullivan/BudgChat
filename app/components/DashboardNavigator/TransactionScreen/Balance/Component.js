import React, { Component } from 'react'
import { View } from 'react-native'
import TransactionButtonBox from './TransactionButtonBox'
import BalanceDisplay from './BalanceDisplay'

const Balance = props =>
  <View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <BalanceDisplay style={{flex: 1}}/>
    <TransactionButtonBox style={{flex: 2}}/>
  </View>

export default Balance
