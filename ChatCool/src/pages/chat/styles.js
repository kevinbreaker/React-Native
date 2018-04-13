import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: '#101010',
    // ...Platform.select({
    //   ios: { paddingTop: 20 },
  },
  conversation: {
    padding: 10,
  },
  bubble: {
    padding: 6,
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 4,
    marginTop: 10,
    // maxWidth: width - 60,
  },

  'bubble-right': {
    alignSelf: 'flex-end',
    backgroundColor: '#d1edc1',
  },

  'bubble-left': {
    alignSelf: 'flex-start',
  },

  author: {
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#333',
  },

  message: {
    fontSize: 16,
    color: '#333',
  },
});
export default styles;
