import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import '../../../config/reactotronConfig';

import styles from './styles';

const Emails = ({
  email: {
    name, title, message, hours, tag, important,
  },
}) => (
  <View style={styles.container}>

    <View style={styles.avatar} >
      <Text style={styles.nameAvatar}>{name.slice()[0]}</Text>
    </View>

    <View style={styles.subContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={1} style={styles.message}>{message}</Text>
    </View>

    <View style={styles.subcontainerHours}>
      <Text style={styles.hours}>{hours}</Text>
      <View style={styles.subcontainerTagStars}>
        <Text style={[
          tag ? styles[`tag-${tag}`] : {},
          tag ? styles.tag : {},
        ]}
        >{tag}
        </Text>
        <Icon style={important ? styles.star : {}} name="md-star" size={25} />
      </View>
    </View>
  </View>
);

export default Emails;
