import { StyleSheet } from 'react-native';

import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  welcomeTitle: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },
  welcomeDescription: {
    color: colors.white,
    fontSize: fonts.regular,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    lineHeight: 21,
  },
  input: {
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    height: 44,
    borderRadius: 3,
    marginTop: 10,
    fontSize: fonts.small,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.secundary,
    alignSelf: 'stretch',
    borderRadius: 3,
    marginTop: 10,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.small,
    fontWeight: 'bold',
  },
  error: {
    color: colors.error,
    fontSize: fonts.small,
    marginTop: 10,
  },
});

export default styles;
