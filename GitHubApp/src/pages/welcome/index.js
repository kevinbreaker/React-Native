import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Bem-vindo</Text>
        <Text style={styles.welcomeDescription}>
          Para prosseguir, informe seu usuário no GitHub
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
        />

        <TouchableOpacity style={styles.button} onPress={ () => {} } >
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
