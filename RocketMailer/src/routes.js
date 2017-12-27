import React from 'react';
import { StackNavigator } from 'react-navigation';

import Header from './components/Header';
import Welcome from './pages/Welcome';
import Inbox from './pages/Inbox';
import OpenedEmail from 'pages/OpenedEmail';

const createRootNavigator = (userExists = false) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    Kmail: {
      screen: StackNavigator({
        Inbox: { screen: Inbox },
      }),
    },
  }, {
    initialRouteName: userExists ? 'Kmail' : 'Welcome',
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  });


export default createRootNavigator;

