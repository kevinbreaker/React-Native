import React, { Component } from 'react';
import { View } from 'react-native';

import Category from './category/index';
import styles from './styles';

export default class Categories extends Component {
  state = {
    categories: [
      {
        id: 1,
        title: 'Social',
        notification: 'Google+',
        color: '#4986e7',
        news: '1 new',
        icon: 'people',
      },
      {
        id: 2,
        title: 'Promotions',
        notification: 'Zagat, Google Offers',
        color: '#19a765',
        news: '2 new',
        icon: 'pricetag',
      },
      {
        id: 3,
        title: 'Updates',
        notification: 'Google play',
        color: '#e9b32f',
        news: '1 new',
        icon: 'information-circle',
      },
    ],
  };


  render() {
    return (
      <View style={styles.container}>
        { this.state.categories.map(category => <Category key={category.id} category={category} />)}
      </View>
    );
  }
}

