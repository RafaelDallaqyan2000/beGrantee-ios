import {StyleSheet} from 'react-native';
import {window} from "../../screens";

export const welcomePopUpStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    marginTop: 64,
  },

  subTitle: {
    color: '#7C819E',
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    fontStyle: 'normal',
  },

  imageContainer: {
    height: window.height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#344054',
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 28,
    fontStyle: 'normal',
    marginTop: 47,
    marginBottom: 55,
  },
});
