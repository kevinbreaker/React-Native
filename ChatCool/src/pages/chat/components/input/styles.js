import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  inputContainer: {
    height: 45,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: colors.secondary,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.lighten,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 30,
    color: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderColor: colors.light,
    // borderRadius: 12,
  },

  button: {
    marginLeft: 10,
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default styles;
