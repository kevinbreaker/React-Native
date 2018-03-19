import Color from 'color';

export default {
  white: '#FFF',
  lighter: '#EEE',
  light: '#DDD',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  black: '#000',

  primary: '#6550b7',
  primaryDark: Color('#6550b7').darken(0.2),
  secundary: '#6adc00',
  success: '#9dca83',
  danger: '#e37a7a',

  transparent: 'transparent',
  darkTransparent: 'rgba(0,0,0,0.6)',
  whiteTransparent: 'rga(255, 255, 255, 0.3)',
};
