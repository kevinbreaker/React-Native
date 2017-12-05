import React from 'react';
import  { View, Text, Image } from 'react-native';

import styles from './styles';

const Product = ({ product: { image, title, description, price } }) => (
  <View style={styles.container}>
    <Image style={styles.image} sourc={{ uri: image }} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

export default Product;
