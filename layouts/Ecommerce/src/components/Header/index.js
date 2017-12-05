import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Icon name="md-arrow-back" size={24} style={styles.icon} />
    <Text style={styles.title}>Profile</Text>
    <Icon name="md-more" size={24} style={styles.icon} />
  </View>
);

export default Header;

