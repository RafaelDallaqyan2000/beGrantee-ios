import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

export const serviceDetailsBodyStyle = StyleSheet.create({
  bodyContainer: {
    top: 23,
    paddingHorizontal: 30,
  },

  opacityBottom: {
    height: 50,
    backgroundColor: 'white',
    width: window.width,
    position: 'absolute',
    bottom: -10,
    opacity: 0.5,
  },

  emptyInfoContainer: {
    height: window.height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyInfoText: {
    color: '#616062',
    fontFamily: 'NotoSansArmenian-Medium',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 32,
    letterSpacing: 0.48,
    fontSize: 24,
  }
});
