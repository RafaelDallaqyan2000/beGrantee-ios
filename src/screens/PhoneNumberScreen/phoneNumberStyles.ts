import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const phoneNumberStyles = StyleSheet.create({
  topic: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 18,
    fontWeight: '500',
    // lineHeight: 28,
    color: '#344054',
    textAlign: 'center',
    marginTop: window.height > 800 ? 38 : 0,
  },

  imageContainer: {
    alignItems: 'center',
  },

  telNumber: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 16,
    lineHeight: 20,
    color: '#333333',
    padding: 0,
    width: 235,
  },

  codeNumber: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: '#344054',
  },

  inputContainer: {
    padding: 0,
    paddingHorizontal: 0,
    paddingLeft: 0,
    borderBottomEndRadius: 8,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    borderBottomStartRadius: 8,
    borderWidth: 1,
    // borderStyle: 'solid',
    borderColor: '#DDE0E3',
    elevation: 0,
  },

  inputLabel: {
    color: '#2F2F2F',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 8,
  },

  leadingContainerStyle: {
    width: 90,
    marginStart: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  leadingFirstChild: {
    width: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  body: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  footer: {
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  errorText: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    color: '#FF9292',
    textAlign: 'right',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18,
  },

  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 2,
  },

  error: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: '#FF9292',
  },
});

export default phoneNumberStyles;
