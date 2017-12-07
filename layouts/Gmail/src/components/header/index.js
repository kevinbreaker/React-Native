import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.subContainer}>
      <Icon style={styles.iconMenu} name="md-menu" size={30} />
      <Text style={styles.title}>Primary</Text>
    </View>
    <Icon style={styles.iconSearch} name="ios-search" size={25} />
  </View>
);

export default Header;
