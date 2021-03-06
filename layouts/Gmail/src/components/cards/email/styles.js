import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../../styles/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 25,
    borderColor: colors.lighter,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },

  subcontainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  avatar: {
    borderRadius: 30,
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  nameAvatar: {
    color: colors.white,
  },

  name: {
    fontWeight: '500',
  },

  message: {
    fontWeight: '300',
    width: 240,
  },

  tag: {
    paddingHorizontal: 5,
    fontSize: fonts.smaller,
    color: colors.white,
  },
  'tag-Work': {
    backgroundColor: colors.purple,
  },
  'tag-Friend': {
    backgroundColor: colors.yellow,
  },
  'tag-Fun': {
    backgroundColor: colors.green,
  },

  star: {
    color: colors.yellow,
  },

  subcontainerTagStars: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
