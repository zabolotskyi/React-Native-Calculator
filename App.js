import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/containers/Calculator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}