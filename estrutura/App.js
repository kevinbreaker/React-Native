import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

import Post from './Components/Post';
import './config/ReactotronConfig';

console.tron.log('testando');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 40,
  },
});


export default class ambiente extends Component {

  state = {
    posts: [
      {
        id: 0,
        title: 'Learning React Native',
        description: 'Description 1',
      },
      {
        id: 1,
        title: 'EcmaScript is love',
        description: 'Description 2',
      },
    ],
  };

  addNewPost = () => {
    this.setState({
      posts: [
        ...this.state.posts,
        {
          id: Math.random(),
          title: 'Learning a new post',
          description: 'Whatever',
        },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.posts.map( post => <Post key={post.id} post={post} />) }
        <Button title="Add Post" onPress={this.addNewPost}/>
      </View>
    );
  }
}

