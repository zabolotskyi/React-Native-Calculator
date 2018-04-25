import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = (props) => (
  <TouchableOpacity
    style={styles.button}
    onPress={props.onPress}
  >
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
