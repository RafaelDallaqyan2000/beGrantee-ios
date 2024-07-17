import {StyleSheet} from 'react-native';
import {window} from '../index';

export const serviceScreenStyle = StyleSheet.create({
  screen: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
    backgroundColor:'#FFF',
    zIndex: 1000
  },

  topScreen: {
    position: 'relative',
    overflow: 'hidden',
    width: window.width,
    flexGrow: 0,
    zIndex: 10,
    flexShrink: 1,
  },

  mainContainer: {
    position: 'relative',
    marginBottom: -200,
    marginTop: -50,
    zIndex: 10,
    borderRadius: 48,
  },

  container: {
    backgroundColor: '#FFF',
    borderRadius: 48,
    paddingTop: 14,
    zIndex: 1000,
  },

  companyLogoContainer: {
    margin: 30,
    borderRadius: 50,
    zIndex: 1000,
    position: "absolute"
  },

  companyLogo: {
    borderRadius: 50,
  },

  title: {
    fontWeight: '600',
    fontSize: 24,
    color: '#344054',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: 'NotoSansArmenian-Regular',
    maxWidth: 240,
  },

  productName: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    color: '#8EAEFD',
    borderColor: '#8EAEFD',
    fontFamily: 'NotoSansArmenian-Regular',
    height: 24,
  },

  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  companyLogoAltContainer: {
    borderColor: '#FFF',
    borderWidth: 1,
    height: 46,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 30,
    borderRadius: 50,
    backgroundColor: '#7C819E',
  },

  companyLogoAlt: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'NotoSansArmenian-Regular',
  },

  opacityContainer: {
    width: window.width,
    backgroundColor: '#FFF',
    height: 5,
    position: 'absolute',
  },

  showMoreContainer: {
    width: window.width,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    height: 35,
  },

  showMoreButton: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 25,
    paddingHorizontal: 5,
    paddingBottom: 11,
    paddingTop: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },

  showMoreButtonText: {
    color: '#8EAEFD',
    backgroundColor: '#FFF',
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'NotoSansArmenian-Medium', // ?
  },

  defaultBackgroundContainer: {
    position: 'absolute',
    top: -100,
    zIndex: 1,
    width: window.width,
    alignItems: 'center',
  },

  defaultBackground: {
    position: 'absolute',
    bottom: 0,
  },

  defaultBackgroundImage: {
    position: 'absolute',
    width: window.width,
    height: 300,
    top: 0,
    left: 0,
    zIndex: -1,
    resizeMode: 'cover',
  },

  defaultBackgroundImageAlt: {
    position: 'absolute',
    width: window.width,
    height: 300,
    top: 0,
    left: 0,
    zIndex: -1,
    resizeMode: 'cover',
  },
});
