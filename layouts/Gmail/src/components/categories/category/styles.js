import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../../styles/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    borderColor: colors.lighter,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: '100%',
  },

  subContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  title: {
    fontWeight: '500',
  },

  notification: {
    color: colors.light,
  },

  new: {
    paddingHorizontal: 5,
    fontSize: fonts.smaller,
    color: colors.white,
    alignContent: 'center',
  },

  newsContainer: {
    marginTop: 20,
    backgroundColor: colors.purple,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  er: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.green,
    // paddingRight: 'stretch'
  }
});

export default styles;
