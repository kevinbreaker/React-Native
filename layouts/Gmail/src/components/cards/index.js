import React, { Component } from 'react';
import { View } from 'react-native';

import Emails from './email/index';
import styles from './styles';
import '../../config/reactotronConfig';

export default class Cards extends Component {
  state = {
    emails: [
      {
        id: 1,
        name: 'Andy Brown',
        title: 'About the project',
        message: 'Hey you, what you want for tomorrow ? I will give for you tomorrow!',
        hours: '01:45 PM',
        tag: 'Work',
        important: true,
      },
      {
        id: 2,
        name: 'Kenny Wanny',
        title: 'Laughing',
        message: 'WTF, are u crazy?! I love EcmaScript!',
        hours: '01:35 PM',
        tag: 'Friend',
        important: true,
      },
      {
        id: 3,
        name: 'Mary tompson',
        title: 'Helpe me please',
        message: 'Check my work, and help me whit it',
        hours: '00:40 PM',
      },
      {
        id: 4,
        name: 'Ammy naile',
        title: 'hi baby',
        message: 'do u remenber me ? I hope that you call me tomorrow',
        hours: '00:35 PM',
      },
      {
        id: 5,
        name: 'Jey',
        title: 'singning with cats',
        message: 'Hey follow me on twitter',
        hours: '00:25 PM',
      },
      {
        id: 6,
        name: 'Emilly, Ray, Richard',
        title: 'Hey you guys',
        message: 'Hey my bitch! shall will go to the beereaing tomorrow ?',
        hours: '00:10 PM',
        tag: 'Fun',
        important: true,
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

