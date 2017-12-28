import React, { Component } from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';

import HeaderReadEmail from 'components/HeaderReadEmail';
import { colors } from 'styles';
import styles from './styles';

export default class SendEmail extends Component {
  static navigationOptions = {
    header: <HeaderReadEmail />,
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid={colors.transparent}
          style={styles.input}
          placeholder="Para quem ?"
        />
        <TextInput
          underlineColorAndroid={colors.transparent}
          style={styles.input}
          placeholder="Qual assunto ?"
        />
        <View style={styles.messageContainer}>
          <TextInput
            multiline
            style={styles.message}
            textBreakStrategy="highQuality"
            underlineColorAndroid={colors.transparent}
            placeholder="Digite a mensagem..."
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Enviar mensagem</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
