import { StyleSheet } from 'react-native';

const red = '#EE7777';
const white = '#FFF';
const greyHeader = '#333';
const greyAuthor = '#999';
const greyContent = '#666';
const greyShadow = '#DA6C6C';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: red,
  },
  header: {
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginBottom: 20,
    height: 50,
    shadowColor: greyShadow,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
  },
  textHeader: {
    color: greyHeader,
    fontWeight: 'bold',
  },
  post: {
    backgroundColor: white,
    marginBottom: 20,
    padding: 20,
    width: 340,
    shadowColor: greyShadow,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
    borderRadius: 8,
  },
  postHeader: {
    color: greyHeader,
  },
  postAuthor: {
    color: greyAuthor,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  postContent: {
    color: greyContent,
    paddingTop: 5,
  },
});
