import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  subject: {
    fontWeight: 'bold',
    paddingBottom: 5,
    fontSize: fonts.big,
  },
  date: {
    fontSize: fonts.small,
  },

  content: {
    paddingTop: 20,
  },
  message: {
    textAlign: 'justify',
    lineHeight: 20,
    color: colors.dark,
    fontSize: fonts.regular,
  },

});

export default styles;
