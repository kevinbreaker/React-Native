import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    height: 45,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#202020',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 30,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 0,
    // backgroundColor: '#0d0d0d',
    borderColor: '#ddd',
    // borderRadius: 12,
  },

  button: {
    marginLeft: 10,
    color: '#a0ffda',
    fontWeight: 'bold',
  },
});

export default styles;
