import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Email from './Email/index';
import styles from './styles';

export default class Inbox extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
      </ScrollView>
    );
  }
}
