import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'space-around',
  },
});

export default styles;
