// import React from 'react';
import { StackNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import Chat from 'pages/chat';

const Routes = StackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Chat: {
      screen: Chat,
    },
  },
  {
    initialRouteName: 'Welcome',
    navigationOptions: {
      header: null,
    },
  },
);

export default Routes;
