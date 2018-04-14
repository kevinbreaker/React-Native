// import React from 'react';
import { StackNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import Chat from 'pages/chat';

// TODO:
//  1. Rota cadastrar com TabNavigation
//  2. Menu no chat com DrawerNavigation

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
