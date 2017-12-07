import { Platform } from 'react-native';

export default {
  paddin: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 62, headerPadding: 0 },
  }),
};
