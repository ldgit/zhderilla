import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

export default function Button({ children, ...otherProps }) {
  return (
    <TouchableOpacity style={styles.button} {...otherProps}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
