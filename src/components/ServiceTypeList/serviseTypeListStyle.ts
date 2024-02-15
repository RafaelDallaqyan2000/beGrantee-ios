import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const serviceTypeListStyle = StyleSheet.create({
  category: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#344054',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 30,
  },
  navItemScrollContainer: {
    width: window.width,
    padding: 5,
    marginLeft: 25,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginVertical: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  navItemText: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default serviceTypeListStyle;
