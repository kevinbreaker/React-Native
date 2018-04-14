import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: colors.darken,
    paddingTop: metrics.statusBarHeight,
  },
  conversation: {
    padding: 10,
  },
  bubble: {
    padding: 6,
    borderRadius: 6,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 4,
    marginTop: 10,
    maxWidth: width - 60,
  },

  'bubble-right': {
    alignSelf: 'flex-end',
    backgroundColor: colors.bubbleAuthor,
  },

  'bubble-left': {
    backgroundColor: colors.bubbleOther,
    alignSelf: 'flex-start',
  },

  author: {
    fontWeight: 'bold',
    marginBottom: 3,
    color: colors.darken,
  },

  message: {
    fontSize: fonts.regular,
    color: colors.darken,
  },
});
export default styles;
