import {StyleSheet} from 'react-native';
import {window} from '../../screens';

export const chooseCardPopUpStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: window.height,
    paddingTop: 50,
    paddingRight: 30,
    paddingLeft: 30,
  },

  header: {
    flexDirection: 'row',
  },

  closeBtn: {
    alignItems: 'flex-end',
    width: 45,
    maxHeight: 30,
    paddingHorizontal: 10,
    marginLeft: 10,
    paddingVertical: 4,
    top: 0,
  },

  title: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    width: window.width - 104,
    lineHeight: 32,
    letterSpacing: 0.48,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.80)',
  },

  topic: {
    color: '#7B7B7B',
    fontFamily: 'NotoSansArmenian-Regular',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 18,
    marginTop: 12,
  },

  footerContainer: {
    height: 146,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#000000',
    borderStyle: 'solid',
  },

  totalText: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28,
    color: '#000000',
  },

  button: {
    width: window.width - 60,
  },

  btnText: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
  },

  loadingText: {
    color: '#344054',
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '500',
    fontStyle: 'normal',
    marginTop: 13,
  },

  emptyPackageContainer: {
    height: window.height,
    backgroundColor: '#FFF',
    paddingLeft: 30,
    paddingRight: 30,
  },

  emptyPackageImage: {
    alignItems: 'center',
    paddingTop: 85,
    height: window.height,
  },

  loadingPackages: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
