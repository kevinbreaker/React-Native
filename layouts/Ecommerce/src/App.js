
import React from 'react';
import {
  View, ScrollView,
} from 'react-native';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductLst';
import Tabs from './components/Tabs';

import styles from './styles';
import './config/reactotronConfig';

const App = () => (
  <View style={styles.container} >
    <Header />
    <ScrollView>
      <SubHeader />
      <ProductList />
    </ScrollView>
    <Tabs />
  </View>
);

export default console.tron.overlay(App);
