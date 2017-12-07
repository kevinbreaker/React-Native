import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    height: 58,
    width: 58,
    backgroundColor: colors.primary,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.padding,
  },

  icon: {
    color: colors.white,
  },
});

export default styles;
