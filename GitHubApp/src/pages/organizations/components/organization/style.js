import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 3,
    shadowColor: colors.inactive,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginBottom: 20,
    elevation: 8,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  avatar: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },

  title: {
    color: colors.primary,
    fontSize: fonts.small,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
