import {StyleSheet} from 'react-native';
import {window} from "../../screens";


export const serviceScreenStyle = StyleSheet.create({
  screen: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
    height: window.height,
  },

  topScreen: {
    position: 'relative',
    overflow: 'hidden',
    width: window.width,
    flexGrow: 0,
    flexShrink: 1,
  },

  container: {
    marginBottom: -200,
    marginTop: -68,
    backgroundColor: '#FFF',
    borderRadius: 48,
    zIndex: 1000,
    paddingTop: 14,
    position: 'relative',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  companyLogo: {
    position: 'absolute',
    margin: 30,
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
    height: 46,
    width: 46,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#7C819E',
    borderColor: '#FFF',
    borderWidth: 1,
    margin: 30,
    borderRadius: 23,
  },

  companyLogoAlt: {
    color: '#FFF',
    // lineHeight: 40,
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
});
