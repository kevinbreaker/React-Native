import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darker,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  subTitle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fonts.regular,
    lineHeight: 21,
    paddingHorizontal: 20,
    // marginHorizontal: 20,
    marginTop: 10,
  },
  input: {
    backgroundColor: colors.white,
    marginTop: 5,
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    fontSize: fonts.small,
    height: 44,
    borderRadius: 5,
  },

  button: {
    backgroundColor: colors.primary,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
