import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from '../../components/HeaderReadEmail';
import styles from './styles';

export default class ReadEmail extends Component {
  static navigationOptions = {
    header: <Header />,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subject}> Entrega do desafio </Text>
          <Text style={styles.date}> 19/07 </Text>
        </View>
        <ScrollView style={styles.content}>
          <Text lineBreakMode={3} style={styles.message}>
            Eu aliqua mollit magna anim nostrud in est in consectetur. Esse ea veniam ullamco ipsum fugiat velit ea ad. Ipsum eiusmod nostrud nisi tempor cillum ipsum laboris minim irure proident mollit tempor. Aliqua pariatur amet culpa culpa aliquip nisi incididunt.

            Pariatur sit ipsum tempor veniam ut exercitation labore. Duis velit aliquip commodo nostrud. Aliqua laboris elit amet pariatur eiusmod eiusmod ut magna sunt id. Occaecat reprehenderit dolor dolor labore irure consequat. Ullamco mollit pariatur enim enim et laboris qui. Id nisi incididunt occaecat id sint excepteur.

            Elit aliquip non do elit laboris ipsum. Fugiat sit occaecat ad est consectetur sit aliqua. Amet sint dolor adipisicing aute est id. Reprehenderit sit sunt magna fugiat aute deserunt consequat consequat. Mollit in sunt minim proident Lorem dolor amet duis. Aliquip exercitation aliquip ut aliquip do dolore tempor exercitation qui. Reprehenderit incididunt cupidatat reprehenderit mollit velit duis Lorem minim non duis ex eiusmod sit.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
