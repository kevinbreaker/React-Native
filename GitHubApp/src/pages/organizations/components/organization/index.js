import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

export default class Organization extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars1.githubusercontent.com/u/25128546?s=200&v=4' }}
        />
        <Text style={styles.title}>React-Native</Text>
      </View>
    );
  }
}
