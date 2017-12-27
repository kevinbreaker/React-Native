import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: colors.dark,
    borderBottomWidth: 2,
  },

});

export default styles;
