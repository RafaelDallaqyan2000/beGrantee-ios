import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');
export const transactionHistoryStyle = StyleSheet.create({
  screen: {
    backgroundColor: '#F8F8F9',
    // height: window.height - 120,
    // flexShrink: 1,
    // flexGrow: 1,
  },
  title: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.48,
    color: '#262626',
    textAlign: 'center',
    // marginBottom: 18,
  },
});
