import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  backgroud: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  containerTitle: {
    alignItems: 'center',
    position: 'relative',
    top: -60,
    marginBottom: 20,
  },
  iconTitle: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: fonts.bigger,
    color: colors.primary,
    textShadowColor: colors.black,
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
    color: colors.white,
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
    backgroundColor: colors.primary,
  },
  buttonSignUp: {
    borderWidth: 1,
    // borderRadius: 20,
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.black,
    fontSize: fonts.small,
    fontWeight: 'bold',
  },
  buttonTextSignUp: {
    color: colors.primary,
    fontSize: fonts.small,
    fontWeight: 'bold',
  },
});

export default styles;
