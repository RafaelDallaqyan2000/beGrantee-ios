import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

export const notificationItemStyle = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: '#FFF',
    width: window.width,
    paddingHorizontal: 30,
    paddingBottom: 16,
  },

  textContainer: {
    width: window.width / 1.4,
  },

  body: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },

  date: {
    color: '#7B7B7B',
    fontFamily: 'NotoSansArmenian-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    paddingTop: 6,
  },

  icon: {
    width: 24,
    height: 24,
    marginTop: 17,
    borderRadius: 3,
  },

  packageName: {
    color: '#344054',
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 2,
  },

  info: {
    color: '#7B7B7B',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'NotoSansArmenian-Regular',
    lineHeight: 18,
  },

  isNew: {
    width: 10,
    height: 10,
    backgroundColor: '#7C819E',
    borderRadius: 50,
  },
});
