
import React from 'react';
import {
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Tabs = () => (
  <View style={styles.container} >
    <Icon name="clone" size={16} style={[styles.icon, styles.active]} />
    <Icon name="search" size={16} style={styles.icons} />
    <View style={styles.main}>
      <Icon name="plus" size={16} style={styles.icons} />
    </View>
    <Icon name="bell-o" size={16} style={styles.icons} />
    <Icon name="user-o" size={16} style={styles.icons} />
  </View>
);

export default Tabs;
