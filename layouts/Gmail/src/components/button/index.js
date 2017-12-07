import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Button = () => (
  <TouchableOpacity style={styles.container}>
    <Icon name="pencil" size={25} style={styles.icon} />
  </TouchableOpacity>
);

export default Button;
