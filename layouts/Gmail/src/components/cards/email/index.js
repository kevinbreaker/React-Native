import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import PropTypes from 'prop-types';

import styles from './styles';

const Emails = ({
  emails: {
    name, message, hours, tag, important,
  },
}) => (

  <View style={styles.container}>
    <View style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.message}>{message}</Text>
    <Text style={styles.tag}>{tag}</Text>
    <Text style={styles.hours}>{hours}</Text>
    <Icon name="md-star" size={20} />
  </View>
);

export default Emails;
