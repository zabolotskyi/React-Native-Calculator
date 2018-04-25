import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = () => {
  const { onPress, label } = this.props;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
