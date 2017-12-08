import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import '../../../config/reactotronConfig';

import styles from './styles';

const Category = ({
  category: {
    title, notification, news, icon, color
  },
}) => (
  <View style={styles.container}>

    <View style={styles.iconContainer} >
      <Icon color={color} name={`md-${icon}`} size={30} />
    </View>
<View style={styles.er}>
    <View style={styles.subContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.notification}>{notification}</Text>
    </View>

    <View style={styles.newsContainer}>
      <Text style={styles.new}>{news}</Text>
    </View>
    </View>
  </View>
);

export default Category;

