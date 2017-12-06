import React from 'react';
import { Text, Image, View } from 'react-native';

import Button from '../Button';
import styles from './styles';

const SubHeader = () => (
  <View style={styles.container}>
    <Image
      style={styles.avatar}
      source={{ uri: 'https://ep01.epimg.net/elpais/imagenes/2017/03/02/buenavida/1488450156_003098_1488461211_noticia_normal_recorte1.jpg' }}
    />
    <View style={styles.profileInfo}>
      <Text style={styles.name}>Kevin Martin</Text>
      <Text style={styles.bio}>React Developer, in love with JavaScript and programming</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.firstButton}>Mensagem</Button>
        <Button type="outline">Seguir</Button>
      </View>
    </View>
  </View>
);

export default SubHeader;
