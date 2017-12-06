import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: metrics.tabBarHeight,
    paddingHorizontal: metrics.padding,
    flexDirection: 'row',
    borderTopWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  icon: {
    color: colors.light,
  },

  active: {
    color: colors.primary,
  },

  main: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainIcon: {
    color: colors.white,
  },
});

export default styles;
