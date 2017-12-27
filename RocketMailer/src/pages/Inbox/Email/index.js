import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import 'config/ReactotronConfig';
import styles from './styles';

export default class Email extends Component {
  state = {
    name: '',
  };

  componentWillMount() {
    if (this.state.name.length === 0) {
      this.checkUser()
        .then(name => this.setState({ name }));
    }
    // AsyncStorage.clear();
  }
    checkUser = async () => {
      const name = await AsyncStorage.getItem('@Kmailer:name');
      return name;
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.emailContaner}>
            <Text style={styles.from}>{this.state.name}</Text>
            <Text>Desafio do email com GraphQL</Text>
          </View>
          <View style={styles.subContaner}>
            <Text style={styles.date}>19/11</Text>
          </View>
        </View>
      );
    }
}
