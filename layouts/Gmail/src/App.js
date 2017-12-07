import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from './components/header';
import Button from './components/button';
import Cards from './components/cards/index';

import './config/reactotronConfig';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header />
    <ScrollView style={{ flex: 1 }} >
      <Cards />
    </ScrollView>
    <View style={{
      flexDirection: 'row', justifyContent: 'flex-end', bottom: 18, right: 18,
    }}
    >
      <Button />
    </View>
  </View>
);

export default console.tron.overlay(App);
