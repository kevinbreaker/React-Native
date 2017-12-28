import React, { Component } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  state = {
    name: '',
  };

  componentWillMount() {
    if (this.state.name.length === 0) {
      this.checkUser()
        .then(name => this.setState({ name }));
    }
  }

  checkUser = async () => {
    const name = await AsyncStorage.getItem('@Kmailer:name');
    return name;
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>{this.state.name}</Text>
        <View style={styles.space} />
      </View>
    );
  }
}
