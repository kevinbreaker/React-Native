import { StackNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Inbox from './pages/Inbox';
import ReadEmail from 'pages/ReadEmail';
import SendEmail from 'pages/SendEmail';

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
      header: null, // props => <Header {...props} />,
    },
  });

export default createRootNavigator;

