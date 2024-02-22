import {StyleSheet} from 'react-native';
import {window } from "../../screens";

export const successOrErrorPupUpStyle = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    width: window.width,
    height: window.height,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  container: {
    backgroundColor: '#FFF',
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    width: window.width,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 87,
    borderTopStyle: 'solid',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    shadowColor: '#000',
    elevation: 10,
    paddingVertical: 60,
    paddingHorizontal: 24,
  },

  message: {
    color: '#000000',
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28,
    fontStyle: 'normal',
    marginTop: 30,
    marginBottom: 15,
    // textAlign: 'center',
  },

  info: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000000',
  },
});
