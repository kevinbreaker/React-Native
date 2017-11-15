import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

const style = require('../styles/style');


const Post = ({ post }) => (
  <View style={style.post}>
    <Text style={style.postHeader}>{post.title}</Text>
    <Text style={style.postAuthor}>{post.author}</Text>
    <Text style={style.postContent}>{post.content}</Text>
  </View>
);

Post.PropTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};
export default Post;
