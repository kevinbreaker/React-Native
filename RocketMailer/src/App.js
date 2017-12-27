import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import createRootNavigator from 'routes';

import './config/ReactotronConfig';

class App extends Component {
  state = {
    userExists: false,
    userCheked: false,
  }

  componentWillMount() {
    this.checkUser()
      .then((response) => {
        this.setState({ userExists: response, userCheked: true });
      });
  }

  checkUser = async () => {
    const name = await AsyncStorage.getItem('@Kmailer:name');
    const email = await AsyncStorage.getItem('@Kmailer:email');

    return name && email !== null;
  }

  render() {
    const { userCheked, userExists } = this.state;

    if (!userCheked) return null;

    const Layout = createRootNavigator(userExists);
    return <Layout />;
  }
}

export default console.tron.overlay(App);
