import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>RocketMailer</Text>
    <TouchableOpacity style={styles.button}>
      <Icon name="send" size={20} color={"#fff"}/>
    </TouchableOpacity>
  </View>
);

export default Header;
