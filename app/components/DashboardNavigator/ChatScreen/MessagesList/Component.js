import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import MessageRow from './MessageRow'

import styles from './Styles'

const ITEM_HEIGHT = 500

class MessageListComponent extends Component {

  constructor() {
    super()

    this.renderItem = ({item}) => {
      return <MessageRow message={item} />
    }

    this.emptyList = () => {
      return (
        <Text style={styles.placeholder}>Placeholder</Text>
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

MessageListComponent.propTypes = {
  data: PropTypes.array.isRequired,
}

export default MessageListComponent
