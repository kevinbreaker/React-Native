import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class Input extends Component {
  state = {
    message: '',
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <Icons size={25} name="tag-faces" backgroundColor="#bfbebf" />
        <TextInput
          style={styles.input}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={this.state.message}
          placeholder="Message"
          placeholderTextColor="#fff"
          onChangeText={message => this.setState({ message })}
        />
        <TouchableOpacity activeOpacity={0.6} onPress={this.handleAddMessage}>
          <Text style={styles.button}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
