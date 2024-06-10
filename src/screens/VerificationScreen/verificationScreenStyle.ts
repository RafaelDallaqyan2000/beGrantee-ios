import {StyleSheet} from 'react-native';
import {window} from "../../screens";

const verificationScreenStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative',
    height: 48,
    marginBottom: 18,
  },
  backIcon: {
    width: 35,
    position: 'absolute',
    left: 14,
    top: 20,
    bottom: 0,
  },
  topicOTP: {
    fontFamily: 'NotoSansArmenian-Medium',
    color: '#262626',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 28,
    fontStyle: 'normal',
  },
  title: {
    fontFamily: 'NotoSansArmenian-Bold',
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0.02,
    color: '#2F2F2F',
    marginTop: 38,
    lineHeight: 32,
  },
  subtitle: {
    color: '#7B7B7B',
    // width: window.width / 2,
  },
  incorrectCode: {
    color: '#F05F5766',
    fontFamily: 'NotoSansArmenian-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    left: 31,
    position: 'absolute',
    bottom: -25,
  },

  resendCode: {
    textAlign: 'center',
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    textDecorationStyle: 'solid',
  },
  button: {
    backgroundColor: '#515151',
    borderRadius: 50,
    position: 'absolute',
    left: (window.width - 365) / 2,
    bottom: 129,
    width: 315,
  },

  mainContainer: {
    height: window.height - 80,
  },
  body: {
    alignItems: 'center',
    height: 126,
    justifyContent: 'space-between',
  },
  footer: {
    height: window.height - window.height / 2.3,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
  },
  defaultVerificationValue: {
    width: 8,
    height: 8,
    borderRadius: 15,
  },
  codeVerificationText: {
    fontWeight: '600',
  },
});

export default verificationScreenStyle;
