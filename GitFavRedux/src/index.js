import { Provider } from 'react-redux';
import React from 'react';
import Routes from './routes';

import store from './store';
import './config/ReactotronConfig';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
