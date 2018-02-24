import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './app/index';

export default class App2 extends React.Component {
  render() {
    return (
      <App></App>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
