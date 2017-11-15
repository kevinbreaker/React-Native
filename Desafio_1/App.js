import {
  AppRegistry,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, { Component } from 'react';

import Post from './components/posts';

import './config/reactotron';

const style = require('./styles/style');

const Header = () => (
  <View style={style.header}>
    <Text style={style.textHeader}>GoNative App</Text>
  </View>
);

console.tron.log('teste');
export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        title: 'Learning React Native',
        author: 'Kevin Martin',
        content: 'React is wonderful, and I`m learning  with the best teacher of React-Native. I want deeping learn about React/Native, because I`ll make some apps for me and maybe for jobs or `freela`',
      },
      {
        id: Math.random(),
        title: 'Learning React Native',
        author: 'Kevin Martin',
        content: 'React is wonderful, and I`m learning  with the best teacher of React-Native. I want deeping learn about React/Native, because I`ll make some apps for me and maybe for jobs or `freela`',
      },
      {
        id: Math.random(),
        title: 'Learning React Native',
        author: 'Kevin Martin',
        content: 'React is wonderful, and I`m learning  with the best teacher of React-Native. I want deeping learn about React/Native, because I`ll make some apps for me and maybe for jobs or `freela`',
      },
      {
        id: Math.random(),
        title: 'Learning React Native',
        author: 'Kevin Martin',
        content: 'React is wonderful, and I`m learning  with the best teacher of React-Native. I want deeping learn about React/Native, because I`ll make some apps for me and maybe for jobs or `freela`',
      },
    ],
  };

  render() {
    return (
      <View style={style.container}>
        <Header />
        <ScrollView>
          { this.state.posts.map(post => <Post key={post.id} post={post} />) }
        </ScrollView>
      </View>
    );
  }
}
AppRegistry.registerComponent('App', () => App);
