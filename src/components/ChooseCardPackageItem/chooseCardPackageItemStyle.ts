import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

export const chooseCardPackageItemStyle = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 25,
    borderbottom: 1,
    borderStyle: 'solid',
    borderColor: '#F3F3F3',
    borderBottomWidth: 1
  },

  companyIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 8,
  },

  companyName: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#344054',
  },

  total: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: '#000000',
  },

  titleText: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#7B7B7B',
  },

  balanceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: window.width - 62,
  },

  inputGeneralStyle: {
    width: 92,
    paddingHorizontal: 3,
    paddingVertical: 0,
    color: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DDE0E3',
    borderRadius: 4,
    textAlign: 'right'
  },
});
