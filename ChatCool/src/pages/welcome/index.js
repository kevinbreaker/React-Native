import React, { Component } from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { NavigatioActions } from 'react-navigation';

import styles from './styles';

export default class Welcome extends Component {
  state = {
    username: '',
    loading: false,
    error: false,
  };
  navigateToChat = () => {
    this.setState({ loading: true });
    NavigatioActions.navigate({ routerName: 'Chat' });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('assets/background-welcome1.jpg')}
        style={styles.backgroud}
        blurRadius={0.3}
      >
        <View style={styles.containerTitle}>
          {/* <Svg width="80" height="80"> */}
          <Image style={styles.iconTitle} source={require('assets/send.png')} />
          {/* </Svg> */}
          <Text style={styles.title}>Chat~Cool</Text>
        </View>
        <View style={styles.containerActions}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu nome de usuário"
            placeholderTextColor="#fff"
            underlineColorAndroid="#aeffda"
            style={styles.input}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor="#fff"
            underlineColorAndroid="#aeffda"
            placeholder="Digite sua senha"
            style={styles.input}
          />

          <TouchableOpacity
            style={[styles.button, styles.buttonLogin]}
            accessibilityComponentType="button"
            activeOpacity={0.6}
            onPress={() => navigate('Chat')}
            /* onPress={this.navigateToChat} */
          >
            {this.state.loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSignUp]}>
            <Text style={styles.buttonTextSignUp}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
