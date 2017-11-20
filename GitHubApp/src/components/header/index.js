import React, { Component } from 'react';
import { colors } from 'styles';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { TouchableOpacity, AsyncStorage, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  logout = () => {
    AsyncStorage.removeItem('@GithubApp:username')
      .then(() => {
        const { dispatch } = this.props.navigation;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Welcome' }),
          ],
        });
        dispatch(resetAction);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Github</Text>
        <TouchableOpacity onPress={this.logout}>
          <Icon name="exchange" size={14} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
}
