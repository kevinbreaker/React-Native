import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: metrics.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  subContainer: {
    flexDirection: 'row',
  },

  iconMenu: {
    justifyContent: 'flex-start',
    paddingLeft: 20,
    color: colors.white,
  },

  title: {
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: '500',
    paddingLeft: 35,
    justifyContent: 'flex-start',
  },

  iconSearch: {
    color: colors.white,
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
});

export default styles;
