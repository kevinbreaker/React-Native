import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from 'styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },

  input: {
    backgroundColor: colors.white,
    marginVertical: 5,
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    fontSize: fonts.small,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
  },
  messageContainer: {
    borderTopWidth: 1,
    marginVertical: 20,
    borderTopColor: colors.light,
    flex: 1,
  },
  message: {
    width,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fonts.big,
  },
});

export default styles;
