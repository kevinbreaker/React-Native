import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Emails from './email/index';
import styles from './styles';
import '../../config/reactotronConfig';

export default class Cards extends Component {
  state = {
    emails: [
      {
        id: 1,
        name: 'Andy Brown',
        message: 'Hey you, what you want for tomorrow ? I will give for you tomorrow!',
        hours: '1:45 PM',
        tag: 'Work',
        important: 'yes',
      },
      {
        id: 2,
        name: 'Kenny Wanny',
        message: 'WTF, are u crazy?! I love EcmaScript!',
        hours: '01:35 PM',
        tag: 'Friend',
        important: 'yes',
      },
      {
        id: 3,
        name: 'Mary tompson',
        message: 'Check my work, and help me whit it',
        hours: '00:40 PM',
      },
      {
        id: 4,
        name: 'Ammy naile',
        message: 'do u remenber me ? I hope that you call me tomorrow',
        hours: '00:35 PM',
      },
      {
        id: 5,
        name: 'Jey',
        message: 'Hey follow me on twitter',
        hours: '00:25 PM',
      },
      {
        id: 6,
        name: 'Emilly, Ray, Richard',
        message: 'Hey my bitch! shall will go to the beereaing tomorrow ?',
        hours: '00:10 PM',
        tag: 'Fun',
        important: 'yes',
      },
    ],
  };


  render() {
    return (
      <View style={styles.container}>
        { this.state.emails.map(email => <Emails key={email.id} email={email} />)}
      </View>
    );
  }
}

