import {StyleSheet} from 'react-native';
import {window } from "../../screens";


export const loadingScreenStyle = StyleSheet.create({
  container: {
    height: window.height - 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },

  header: {
    alignItems: 'center',
    paddingHorizontal: 43,
    paddingVertical: 50,
    gap: 24,
  },

  title: {
    width: window.width / 2.3, // have to 180
    textAlign: 'center',
  },

  subTitle: {
    color: '#7B7B7B',
    lineHeight: 18,
    width: window.width / 1.4,
    textAlign: 'center',
  },

  loadingContainer: {
    height: 182,
    width: 182,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
  },

  bgColor: {
    height: window.height,
    width: window.width,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },

  popUp: {
    height: 185,
    width: window.width,
    position: 'absolute',
    backgroundColor: '#FFF',
    bottom: -25,
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },

  cancelled: {
    color: '#344054',
    fontFamily: 'NotoSansArmenian-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'normal',
    marginBottom: 16,
  },

  cancelledInfo: {
    color: '#344054',
    fontFamily: 'NotoSansArmenian-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    fontStyle: 'normal',
    marginBottom: 44,
  },

  btnsContainer: {
    width: window.width - 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 4,
  },

  btn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 8,
    padding: 0,
    width: 60,
  },

  btnText: {
    color: '#FFF',
    fontFamily: 'NotoSansArmenian-Regular',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'normal',
  },
});
