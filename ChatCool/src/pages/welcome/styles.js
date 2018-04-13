import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroud: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  containerTitle: {
    alignItems: 'center',
    // flexDirection: 'row'
    position: 'relative',
    top: -60,
    marginBottom: 20,
  },
  iconTitle: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 30,
    color: '#aeffda',
    textShadowColor: 'black',
    textShadowOffset: { width: -2, height: 1 },
    textShadowRadius: 10,
    fontWeight: 'bold',
  },
  containerAction: {
    alignSelf: 'stretch',
    width: '100%',
  },
  input: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    color: 'white',
  },
  button: {
    alignSelf: 'stretch',
    borderRadius: 3,
    marginTop: 10,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  buttonLogin: {
    backgroundColor: '#aeffda',
  },
  buttonSignUp: {
    borderWidth: 1,
    // borderRadius: 20,
    borderColor: '#aab4ef',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    // textShadow: 2,
    fontWeight: 'bold',
  },
  buttonTextSignUp: {
    color: '#aeffda',
    fontSize: 14,
    // textShadow: 2,
    fontWeight: 'bold',
  },
});

export default styles;
