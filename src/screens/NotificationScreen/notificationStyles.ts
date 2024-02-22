import {StyleSheet} from 'react-native';
import {window} from "../../screens";

export const notificationStyles = StyleSheet.create({
  notificationTitle: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.48,
    color: '#000000CC',
    backgroundColor: '#FFF',
    textAlign: 'center',
  },

  ifNotNotification: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.48,
    color: 'rgba(0, 0, 0, 0.80)',
    backgroundColor: '#FFF',
    width: window.width,
    textAlign: 'center',
  },

  emptyNotificationText: {
    color: '#616062',
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    letterSpacing: 0.48,
    marginTop: 45,
  },

  date: {
    textAlign: 'right',
    marginBottom: 8,
  },

  title: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 20,
    color: '#2F2F2F',
  },

  text: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontWeight: '400',
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0.1,
    marginTop: 9,
  },

  errorScreen: {
    backgroundColor: '#FFF',
  },

  errorContainer: {
    height: window.height - 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
