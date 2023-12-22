import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const packageCardStyle = StyleSheet.create({
  container: {
    backgroundColor: '#3875F6',
    borderRadius: 12,
    height: 100,
    width: 274,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    elevation: 3,
  },

  body: {
    flexDirection: 'row',
  },

  companyLogo: {
    width: 38,
    height: 38,
    borderRadius: 38,
    top: 13,
    left: 0,
    marginRight: 8,
    backgroundColor: '#7C819E',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },

  defaultCompanyLogo: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 28,
    color: '#FFF',
  },

  companyInfo: {
    color: '#FFFFFF',
    fontFamily: 'NotoSansArmenian-Medium',
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.4,
    width: 200,
    top: 15,
    lineHeight: 32,
  },

  dateContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 9,
  },

  amd: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#FFF',
    width: 110,
  },

  date: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#FFF',
    width: 110,
  },
});

export default packageCardStyle;
