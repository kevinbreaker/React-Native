import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import 'config/ReactotronConfig';

import styles from './styles';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
  }

  state = {
    name: '',
    email: '',
    error: false,
  }

  saveUser = async () => {
    await AsyncStorage.setItem('@Kmailer:name', this.state.name);
    await AsyncStorage.setItem('@Kmailer:email', this.state.email);
  }

  navigateToMail = () => {
    if (this.state.name.length === 0 || this.state.email.length === 0) return;

    this.saveUser()
      .then(() => {
        const { dispatch } = this.props.navigation;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Kmail' }),
          ],
        });
        dispatch(resetAction);
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subTitle}>
          Para prosseguir, informe seu nome e seu email, por gentileza.
        </Text>

        {this.state.error && <Text>Algo errado ocorreu</Text>}

        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={(name) => { this.setState({ name }); }}
          placeholder="Digite seu nome"
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
          placeholder="Digite seu e-mail"
        />
        <TouchableOpacity style={styles.button} onPress={this.navigateToMail}>
          <Text style={styles.text}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
