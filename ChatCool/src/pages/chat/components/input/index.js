import React, { Component } from 'react';
import {
  TextInput,
  Keyboard,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class Input extends Component {
  state = {
    message: '',
    keyboardActive: false,
  };

  componentWillMount() {
    Keyboard.dismiss();
  }
  componentDidMount() {
    this.keyboardAct = Keyboard.addListener('keyboardDidShow', this.show);
    this.keyboardInact = Keyboard.addListener('keyboardDidHide', this.hide);
  }

  componentWillUnmout() {
    Keyboard.dismiss();
    this.keyboardAct.remove();
    this.keyboardInact.remove();
  }


  hide = () => {
    this.setState({ keyboardActive: false });
  }

  show =() => {
    this.setState({ keyboardActive: true });
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <Icons size={25} name="tag-faces" color="#bfbebf" />
        <TextInput
          style={styles.input}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={this.state.message}
          placeholder="Message"
          placeholderTextColor="#fff"
          onChangeText={message => this.setState({ message })}
        />
        <TouchableOpacity activeOpacity={0.6} onPress={this.handleAddMessage}>
          { this.state.keyboardActive
          ? <Icons size={25} name="send" color="#8afeab" />
          : <Text style={styles.button}>Enviar</Text>
        }
        </TouchableOpacity>
      </View>
    );
  }
}
