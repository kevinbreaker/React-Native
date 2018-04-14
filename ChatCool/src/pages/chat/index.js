import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import Input from './components/input';
import Header from 'components/header';
import styles from './styles';

export default class Chat extends Component {
  static navigationOptions = {
    header: props => <Header {...props} />
  };
  state = {
    po: '',
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <ScrollView
          keyboardShouldPersistTaps="never"
          contentContainerStyle={styles.conversation}
        >
          <View
            style={[
          styles.bubble,
          styles['bubble-right'],
       ]}
          >
            <Text style={styles.author}>Kevin Martin</Text>
            <Text style={styles.message}>Fucking test chat~cool</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-left'],
       ]}
          >
            <Text style={styles.author}>Radom</Text>
            <Text style={styles.message}>Hail my lord</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-right'],
       ]}
          >
            <Text style={styles.author}>Kevin Martin</Text>
            <Text style={styles.message}>Fucking test chat~cool</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-left'],
       ]}
          >
            <Text style={styles.author}>Radom</Text>
            <Text style={styles.message}>Hail my lord</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-right'],
       ]}
          >
            <Text style={styles.author}>Kevin Martin</Text>
            <Text style={styles.message}>Fucking test chat~cool</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-left'],
       ]}
          >
            <Text style={styles.author}>Radom</Text>
            <Text style={styles.message}>Hail my lord</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-right'],
       ]}
          >
            <Text style={styles.author}>Kevin Martin</Text>
            <Text style={styles.message}>Fucking test chat~cool</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-left'],
       ]}
          >
            <Text style={styles.author}>Radom</Text>
            <Text style={styles.message}>Hail my lord</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-right'],
       ]}
          >
            <Text style={styles.author}>Kevin Martin</Text>
            <Text style={styles.message}>Fucking test chat~cool</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-left'],
       ]}
          >
            <Text style={styles.author}>Radom</Text>
            <Text style={styles.message}>Hail my lord</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-right'],
       ]}
          >
            <Text style={styles.author}>Kevin Martin</Text>
            <Text style={styles.message}>Fucking test chat~cool</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-left'],
       ]}
          >
            <Text style={styles.author}>Radom</Text>
            <Text style={styles.message}>Hail my lord</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-right'],
       ]}
          >
            <Text style={styles.author}>Kevin Martin</Text>
            <Text style={styles.message}>Fucking test chat~cool</Text>
          </View>
          <View
            style={[
          styles.bubble,
          styles['bubble-left'],
       ]}
          >
            <Text style={styles.author}>Radom</Text>
            <Text style={styles.message}>Hail my lord</Text>
          </View>
        </ScrollView>
        <Input />
      </KeyboardAvoidingView>
    );
  }
}
