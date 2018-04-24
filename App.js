import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Calculator from './src/containers/Calculator';

export default () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
);
