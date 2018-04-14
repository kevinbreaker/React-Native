import React, { Component } from 'react';
import { colors } from 'styles';
// import PropTypes from 'prop-types';
// import { NavigationActions } from 'react-navigation';

import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class Header extends Component {
  state = {
    men: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Welcome')}>
          <Icon name="arrow-back" size={25} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Chat~Cool</Text>
      </View>
    );
  }
};
