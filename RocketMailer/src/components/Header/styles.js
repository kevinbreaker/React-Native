import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 54 + metrics.statusBarHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 20,
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white,
  },
  button: {
    paddingHorizontal: 20,
  },
});

export default styles;
