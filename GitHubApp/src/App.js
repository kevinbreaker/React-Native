import 'config/ReactotronConfig';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import createRootNavigator from 'routes';

console.tron.log('Debug test');

export default class App extends Component {
  state = {
    userExists: false,
    userChecked: false,
  };

  componentWillMount() {
    this.checkUser().then((response) => {
      this.setState({ userExists: response, userChecked: true });
    });
  }

  checkUser = async () => {
    const user = await AsyncStorage.getItem('@GithubApp:username');

    return user !== null;
  };

  render() {
    const { userExists, userChecked } = this.state;

    if (!userChecked) return null;

    const Layout = createRootNavigator(userExists);
    return <Layout />;
  }
}
