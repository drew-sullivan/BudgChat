import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import TransactionRow from './TransactionRow'

import styles from './Styles'

class TransactionListComponent extends Component {

  constructor() {
    super()

    this.renderItem = ({item}) => {
      // return <TransactionRow message={item} />
      return <TransactionRow transaction={item} />
    }

    this.emptyList = () => {
      return (
        <Text style={styles.placeholder}>Hope you're having a good day!</Text>
      )
    }

    this.itemLayout = (data, index) => (
      {length: 10, offset: 0, index}
    )
  }

  componentDidUpdate() {
    const len = this.props.data.length;
    if (len) {
        this.flatList.scrollToIndex({animated: true, index: (len - 1)});
    }
  }

  render() {
    const data = this.props.data
    const contentContainerStyle = data.length ? null : styles.flatlistContainerStyle
    return (
      <FlatList
        ref={(c) => { this.flatList = c }}
        style={styles.container}
        contentContainerStyle={contentContainerStyle}
        data={data}
        keyExtractor={item => item.createdAt}
        renderItem={this.renderItem}
        getItemLayout={this.itemLayout}
        ListEmptyComponent={this.emptyList}
        />
    )
  }
}

TransactionListComponent.propTypes = {
  data: PropTypes.array.isRequired,
}

export default TransactionListComponent
